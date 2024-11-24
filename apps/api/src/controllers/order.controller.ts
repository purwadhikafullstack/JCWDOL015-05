import { Request, Response } from 'express';
import prisma from '@/prisma';
import { OrderStatus, PaymentStatus } from '@prisma/client';
import { getDistance } from 'geolib';
import { Prisma } from '@prisma/client';
import { generateUniqueOrderId } from '@/services/helper';

export class OrderController {
  async getOrders(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;
      const sortOrder = req.query.sortBy === 'desc' ? 'desc' : 'asc';
      const orderIdFilter = req.query.orderId
        ? parseInt(req.query.orderId as string)
        : undefined;
      const outletIdFilter = req.query.outletId
        ? parseInt(req.query.outletId as string)
        : undefined;
      const statusFilter = req.query.status as string | undefined;
      const paymentStatusFilter = req.query.paymentStatus as string | undefined;
      const customerIdFilter = req.query.customerId
        ? parseInt(req.query.customerId as string)
        : undefined;

      const orders = await prisma.order.findMany({
        skip,
        take: limit,
        where: {
          ...(orderIdFilter && { orderId: orderIdFilter }),
          ...(outletIdFilter && { outletId: outletIdFilter }),
          ...(statusFilter && {
            status: statusFilter as keyof typeof OrderStatus,
          }),
          ...(paymentStatusFilter && {
            paymentStatus: paymentStatusFilter as keyof typeof PaymentStatus,
          }),
          ...(customerIdFilter && { customerId: customerIdFilter }),
        },
        include: {
          outlet: { select: { name: true } },
          outletAdmin: true,
          customer: true,
          workers: {
            include: {
              worker: {
                include: {
                  employee: { select: { fullName: true } },
                },
              },
            },
          },
          drivers: {
            include: {
              driver: {
                include: {
                  employee: { select: { fullName: true } },
                },
              },
            },
          },
          items: true,
        },
        orderBy: {
          createdAt: sortOrder,
        },
      });

      const totalOrders = await prisma.order.count({
        where: {
          ...(orderIdFilter && { orderId: orderIdFilter }),
          ...(outletIdFilter && { outletId: outletIdFilter }),
          ...(statusFilter && {
            status: statusFilter as keyof typeof OrderStatus,
          }),
          ...(paymentStatusFilter && {
            paymentStatus: paymentStatusFilter as keyof typeof PaymentStatus,
          }),
          ...(customerIdFilter && { customerId: customerIdFilter }),
        },
      });

      const totalPages = Math.ceil(totalOrders / limit);

      return res.status(200).json({
        data: orders,
        pagination: {
          totalItems: totalOrders,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  }

  async getNearOutlets(req: Request, res: Response) {
    try {
      const { addressId, customerId } = req.body;
      if (!customerId) throw 'customer location not found';
      const getCustomerLoc = await prisma.address.findUnique({
        where: { addressId: +addressId, customerId: +customerId },
      });
      const customerLoc = {
        lat: getCustomerLoc?.latitude!,
        lng: getCustomerLoc?.longitude!,
      };
      const totalOutlet = await prisma.outlet.count();
      const getOutlets = await prisma.outlet.findMany();
      const maxRadius = 2000;
      const nearOutlet = getOutlets.map((outlet) => {
        const outletLoc = { lat: outlet.latitude!, lng: outlet.longitude! };
        const distance = getDistance(customerLoc, outletLoc);
        const distanceResult =
          distance > 1000
            ? `${(distance / 1000).toFixed(2)}km`
            : `${distance}m`;
        const nearOutlet = distance <= maxRadius;
        return { ...outlet, nearOutlet, jarak: `${distanceResult}` };
      });
      const filterOutlet = nearOutlet.filter(
        (outlet) => outlet.nearOutlet == true,
      );
      const totalNearOutlet = nearOutlet.length;
      res.status(200).send({
        status: 'ok',
        totalFoundOutlet: totalNearOutlet,
        data: filterOutlet,
      });
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err,
      });
    }
  }
  async createPickupOrder(req: Request, res: Response) {
    try {
      const {
        customerId,
        outletId,
        addressId,
        pickupDate,
        pickupTime,
        status,
      } = req.body;

      const prismaTransaction = await prisma.$transaction(async (pt) => {
        const existCustomer = await pt.customer.findUnique({
          where: { customerId: customerId },
        });
        if (!existCustomer) throw 'customer not found';

        const existOutlet = await pt.outlet.findUnique({
          where: { outletId: outletId },
        });
        if (!existOutlet) throw 'outlet not found';

        const existAddress = await pt.address.findUnique({
          where: { addressId: addressId },
        });
        const uniqueOrderId = generateUniqueOrderId(customerId);
        if (!existAddress) throw 'address user not found';
        const newOrder = await pt.order.create({
          data: {
            orderId: parseInt(uniqueOrderId),
            customerId,
            outletId,
            status: 'menungguKonfirmasi',
            customerAddressId: addressId,
            pickupDate: new Date(pickupDate),
            pickupTime,
          },
        });
        return { newOrder };
      });
      res.status(200).send({
        status: 'ok',
        data: prismaTransaction.newOrder,
      });
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err,
      });
    }
  }
  async getOrderListbyOutlet(req: Request, res: Response) {
    try {
      const { outletId } = req.body;
      const getOrder = await prisma.order.findMany({
        where: { outletId: +outletId },
        include: {
          customer: true,
          drivers: true,
          outlet: true,
          outletAdmin: true,
          workers: true,
        },
      });
      res.status(200).send({
        status: 'ok',
        data: getOrder,
      });
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err,
      });
    }
  }
  async confirmOrder(req: Request, res: Response) {
    try {
      const { orderId, outletAdminId } = req.body;
      const confirmOrder = await prisma.order.update({
        where: { orderId: +orderId },
        data: {
          outletAdminId: +outletAdminId,
        },
      });
      res.status(200).send({
        status: 'ok',
        data: confirmOrder,
      });
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err,
      });
    }
  }
  async driverOrderList(req: Request, res: Response) {
    try {
      const { outletId } = req.body;
      const listOrder = await prisma.order.findMany({
        where: { outletId: outletId, status: 'menungguPenjemputanDriver' },
      });
      const filter = listOrder.filter((order) => order.outletAdminId !== null);
      res.status(200).send({
        status: 'ok',
        data: filter,
      });
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err,
      });
    }
  }
  async generatePaymentLink(req: Request, res: Response) {
    try {
      const { orderId, customerId, outletsId, weight, price } = req.body;
      const checkUser = await prisma.customer.findUnique({
        where: { customerId: customerId },
      });
      const checkOrder = await prisma.order.findUnique({
        where: { orderId: +orderId },
      });
      if (!checkOrder) throw 'Order Not Found';
      const uniqueOrder = `${orderId} ${Date.now()}`;
      const parameter = {
        transaction_details: {
          order_id: orderId,
          gross_amount: price * weight,
        },
        customer_details: {
          email: `${checkUser?.email!}`,
          first_name: checkUser?.fullName!,
        },
        expiry: {
          duration: 15,
          unit: 'minutes',
        },
      };
      const url = `https://app.sandbox.midtrans.com`;
      const secret = process.env.MIDTRANS_SECRET_KEY!;
      const encodedKey = Buffer.from(secret).toString('base64');
      const paymentLink = await fetch(`${url}/snap/v1/transactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${encodedKey}`,
          Accept: 'application/json',
        },
        body: JSON.stringify(parameter),
      });
      console.log(paymentLink);
      const response = await paymentLink.json();
      res.status(200).send({
        status: 'ok',
        data: response,
      });
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err,
      });
    }
  }
  async updatePaymentOrder(req: Request, res: Response) {
    try {
      const { order_id, transaction_status, status_code } = req.query;

      if (!order_id || !transaction_status || !status_code)
        throw 'invalid query';
      const checkOrder = await prisma.order.findUnique({
        where: { orderId: +order_id, paymentStatus: 'unpaid' },
      });

      if (
        checkOrder &&
        transaction_status === 'settlement' &&
        status_code === '200'
      ) {
        await prisma.order.update({
          where: { orderId: +order_id },
          data: { paymentStatus: 'paid' },
        });
      }

      res.status(200).send({
        status: 'ok',
        msg: 'payment status updated to paid',
      });
    } catch (err) {
      res.status(400).send({
        status: 'ok',
        err: err,
      });
    }
  }
  async getOrderListCustomer(req: Request, res: Response) {
    try {
      const { customerId } = req.body;
      const { search } = req.query;
      let filter: Prisma.OrderWhereInput = {};
      if (search) {
        filter.orderId = { equals: filter as number };
      }
      const sortBy = (req.query.sortBy as string) || 'orderId';
      const sortOrder = (req.query.sortOrder as string) || 'desc';
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;
      const listOrder = await prisma.order.findMany({
        where: { customerId: customerId, ...filter },
        skip: skip,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
        include: {
          drivers: true,
          items: true,
          outlet: true,
          outletAdmin: true,
        },
      });
      const totalOrder = await prisma.order.count({
        where: { customerId: customerId, ...filter },
      });

      res.status(200).send({
        status: 'ok',
        data: listOrder,
        total: totalOrder,
        page: page,
        totalPages: Math.ceil(totalOrder / limit),
      });
    } catch (err) {
      res.status(400).send({
        status: 'ok',
        err: err,
      });
    }
  }
}
