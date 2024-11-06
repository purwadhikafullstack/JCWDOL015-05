import { Request, Response } from 'express';
import prisma from '@/prisma';
import { OrderStatus, PaymentStatus } from '@prisma/client';

export class OrderController {
  async getOrders(req: Request, res: Response) {
    try {
      // Pagination parameters
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;

      // Sorting parameter for Created Date
      const sortOrder = req.query.sortBy === 'desc' ? 'desc' : 'asc';

      // Filtering parameters
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

      // Prisma query with filters
      const orders = await prisma.order.findMany({
        skip,
        take: limit,
        where: {
          ...(orderIdFilter && { orderId: orderIdFilter }),
          ...(outletIdFilter && { outletId: outletIdFilter }),
          ...(statusFilter && {
            status: statusFilter as keyof typeof OrderStatus,
          }), // Ensure the status matches the enum values
          ...(paymentStatusFilter && {
            paymentStatus: paymentStatusFilter as keyof typeof PaymentStatus,
          }), // Ensure paymentStatus matches the enum
          ...(customerIdFilter && { customerId: customerIdFilter }),
        },
        include: {
          outlet: { select: { name: true } },
          outletAdmin: true,
          customer: true,
          workers: {
            include: {
              worker: {
                select: { employeeId: true },
              },
            },
          },
          drivers: {
            include: {
              driver: {
                select: { employeeId: true },
              },
            },
          },
          items: true,
        },
        orderBy: {
          createdAt: sortOrder, // Sort by Created Date
        },
      });

      // Total count for pagination
      const totalOrders = await prisma.order.count({
        where: {
          ...(orderIdFilter && { orderId: orderIdFilter }),
          ...(outletIdFilter && { outletId: outletIdFilter }),
          ...(statusFilter && {
            status: statusFilter as keyof typeof OrderStatus,
          }), // Ensure status filter is applied correctly
          ...(paymentStatusFilter && {
            paymentStatus: paymentStatusFilter as keyof typeof PaymentStatus,
          }), // Ensure paymentStatus filter is applied
          ...(customerIdFilter && { customerId: customerIdFilter }),
        },
      });

      const totalPages = Math.ceil(totalOrders / limit);

      // Response with data and pagination metadata
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
}
