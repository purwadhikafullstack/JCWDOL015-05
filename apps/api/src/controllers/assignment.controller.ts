import { Request, Response } from 'express';
import prisma from '@/prisma';
import { OrderStatus } from '@prisma/client';

export class AssignmentController {
  async orderConfirmation(req: Request, res: Response) {
    const { outletId } = req.params;
    try {
      const orders = await prisma.order.findMany({
        where: {
          outletId: parseInt(outletId),
          status: 'menungguKonfirmasi',
        },
        include: {
          customer: true,
          items: true,
          customerAddress: { select: { detailAddress: true } },
        },
      });

      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  }

  async confirmOrder(req: Request, res: Response) {
    const { orderId } = req.params;
    const { outletAdminId } = req.body;
    try {
      await prisma.order.update({
        where: { orderId: parseInt(orderId) },
        data: {
          outletAdminId: outletAdminId,
          status: 'menungguPenjemputanDriver',
        },
      });
      return res.status(200).json({ message: 'Order confirmed' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to patch order' });
    }
  }

  async pickupRequest(req: Request, res: Response) {
    const { outletId } = req.params;
    try {
      await prisma.order.findMany({
        where: {
          outletId: parseInt(outletId),
          status: 'menungguPenjemputanDriver',
        },
        include: { customerAddress: { select: { detailAddress: true } } },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to patch order' });
    }
  }

  async itemInput(req: Request, res: Response) {
    const { outletAdminId } = req.params;
    try {
      const orders = await prisma.order.findMany({
        where: {
          outletAdminId: parseInt(outletAdminId),
          status: 'laundrySampaiOutlet',
        },
        include: {
          customer: true,
          items: true,
        },
      });

      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  }

  async itemSubmit(req: Request, res: Response) {
    const { items, weight, orderId, pricePerKg } = req.body;

    const totalPrice = weight * pricePerKg;

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: 'Invalid items format' });
    }
    if (!orderId) {
      return res.status(400).json({ error: 'Missing orderId' });
    }

    try {
      await prisma.order.update({
        where: { orderId },
        data: { weight, status: 'pencucian', totalPrice },
      });
      const createdItems = await Promise.all(
        items.map(async (item: { item: string; quantity: number }) => {
          const { item: itemName, quantity } = item;
          return await prisma.items.create({
            data: {
              orderId,
              item: itemName,
              quantity,
            },
          });
        }),
      );

      return res.status(201).json({
        message: 'Items have been added and weight updated successfully',
        data: createdItems,
      });
    } catch (error) {
      console.error('Error creating items or updating weight:', error);
      return res
        .status(500)
        .json({ error: 'Failed to create items or update weight' });
    }
  }

  async bypassRequest(req: Request, res: Response) {
    const { outletId } = req.params;

    try {
      const orders = await prisma.order.findMany({
        where: {
          outletId: parseInt(outletId),
          bypassMessage: { not: null },
        },
        include: {
          items: true,
        },
      });

      return res.json(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      return res.status(500).json({ error: 'Failed to fetch orders' });
    }
  }

  async confirmBypass(req: Request, res: Response) {
    const { orderId } = req.params;
    const { status, action, paymentStatus } = req.body;

    let newStatus;
    if (action === 'reject') {
      newStatus = status;
    } else if (action === 'confirm') {
      if (status === 'pencucian') {
        newStatus = 'penyetrikaan';
      } else if (status === 'penyetrikaan') {
        newStatus = 'packing';
      } else if (status === 'packing') {
        if (paymentStatus === 'paid') {
          newStatus = 'siapDiantar';
        } else {
          newStatus = 'menungguPembayaran';
        }
      }
    }

    try {
      await prisma.order.update({
        where: { orderId: parseInt(orderId) },
        data: { status: newStatus, bypassMessage: null },
      });
      return res.status(200).json({ message: 'Order confirmed' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to patch order' });
    }
  }

  async getPickup(req: Request, res: Response) {
    const { outletId } = req.params;
    try {
      const orders = await prisma.order.findMany({
        where: {
          outletId: parseInt(outletId),
          status: 'menungguPenjemputanDriver',
          drivers: {
            none: {},
          },
        },
        include: {
          customerAddress: { select: { detailAddress: true } },
          customer: true,
          items: true,
        },
      });

      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  }

  async confirmPickup(req: Request, res: Response) {
    const { orderId, driverId } = req.body;

    try {
      await prisma.$transaction([
        prisma.driversOnOrders.create({
          data: { driverId, orderId, activity: 'pickUp' },
        }),
        prisma.driver.update({
          where: { driverId: driverId },
          data: { isAvailable: false },
        }),
      ]);

      return res.status(200).json({ message: 'pickup confirmed' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to pickup order' });
    }
  }

  async getDelivery(req: Request, res: Response) {
    const { outletId } = req.params;
    try {
      const orders = await prisma.order.findMany({
        where: {
          outletId: parseInt(outletId),
          status: 'siapDiantar',
        },
        include: {
          customer: true,
          items: true,
          customerAddress: { select: { detailAddress: true } },
          drivers: true,
        },
      });
      const filteredOrders = orders.filter(
        (order) => order.drivers.length === 1,
      );
      res.json(filteredOrders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  }

  async confirmDelivery(req: Request, res: Response) {
    const { orderId, driverId } = req.body;

    try {
      await prisma.$transaction([
        prisma.driversOnOrders.create({
          data: { orderId, driverId, activity: 'delivery' },
        }),
        prisma.order.update({
          where: { orderId },
          data: { status: 'sedangDikirim' },
        }),
        prisma.driver.update({
          where: { driverId: driverId },
          data: { isAvailable: false },
        }),
      ]);
      return res.status(200).json({ message: 'delivery confirmed' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delivery order' });
    }
  }

  async getOnPickup(req: Request, res: Response) {
    const { driverId } = req.params;
    try {
      const orders = await prisma.order.findMany({
        where: {
          status: {
            in: [
              'menungguPenjemputanDriver',
              'laundryMenujuOutlet',
              'sedangDikirim',
            ],
          },
          drivers: {
            some: {
              driverId: parseInt(driverId),
            },
          },
        },
        include: {
          customerAddress: { select: { detailAddress: true } },
          drivers: true,
        },
      });

      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  }

  async receiveItem(req: Request, res: Response) {
    const { orderId } = req.body;

    try {
      await prisma.order.update({
        where: { orderId: orderId },
        data: { status: 'laundryMenujuOutlet' },
      });
      return res.status(200).json({ message: 'Laundry items reveived' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to receive laundry items' });
    }
  }

  async completePickup(req: Request, res: Response) {
    const { orderId, driverId } = req.body;
    try {
      await prisma.$transaction([
        prisma.order.update({
          where: { orderId: orderId },
          data: { status: 'laundrySampaiOutlet' },
        }),
        prisma.driver.update({
          where: { driverId: driverId },
          data: { isAvailable: true },
        }),
      ]);
      return res.status(200).json({ message: 'Laundry arrived at outlet' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to complete pickup' });
    }
  }

  async completeDelivery(req: Request, res: Response) {
    const { driverId, orderId } = req.body;
    try {
      await prisma.$transaction([
        prisma.order.update({
          where: { orderId: orderId },
          data: { status: 'terkirim' },
        }),
        prisma.driver.update({
          where: { driverId: driverId },
          data: { isAvailable: true },
        }),
      ]);
      return res.status(200).json({ message: 'Delivered to customer' });
    } catch (error) {
      res.status(500).json({ error: 'Delivery completion failed' });
    }
  }

  async getDriverAvailability(req: Request, res: Response) {
    const { driverId } = req.params;
    try {
      const data = await prisma.driver.findUnique({
        where: { driverId: parseInt(driverId) },
      });
      return res.status(200).send(data);
    } catch (error) {
      res.status(500).json({ error: 'GET driver availability failed' });
    }
  }

  async getTask(req: Request, res: Response) {
    try {
      const { status, outletId } = req.params;

      let orderStatus: OrderStatus | undefined;
      if (status === 'washing') orderStatus = 'pencucian' as OrderStatus;
      else if (status === 'ironing')
        orderStatus = 'penyetrikaan' as OrderStatus;
      else if (status === 'packing') orderStatus = 'packing' as OrderStatus;

      if (!orderStatus) {
        return res.status(400).json({ error: 'Invalid status value' });
      }

      const outletIdInt = parseInt(outletId, 10);
      if (isNaN(outletIdInt)) {
        return res.status(400).json({ error: 'Invalid outletId value' });
      }

      const order = await prisma.order.findFirst({
        where: {
          status: orderStatus,
          outletId: outletIdInt,
          bypassMessage: null,
        },
        include: {
          items: true,
        },
        orderBy: { orderId: 'asc' },
      });

      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  async submitBypass(req: Request, res: Response) {
    const { orderId } = req.params;
    const { bypassMessage, workerId } = req.body;
    try {
      await prisma.$transaction([
        prisma.order.update({
          where: { orderId: parseInt(orderId) },
          data: { bypassMessage },
        }),
        prisma.workersOnOrders.create({
          data: { workerId: workerId, orderId: parseInt(orderId) },
        }),
      ]);

      return res.status(200).json({ message: 'Bypass message updated' });
    } catch (error) {
      console.error('Error in submitBypass:', error);
      return res.status(500).json({
        error: 'Failed to update the bypass message',
      });
    }
  }

  async submitTask(req: Request, res: Response) {
    const { orderId } = req.params;
    const { workerId, status, paymentStatus } = req.body;

    const parsedOrderId = parseInt(orderId);
    const parsedWorkerId = parseInt(workerId);

    try {
      let newStatus: OrderStatus | undefined;
      switch (status) {
        case 'pencucian':
          newStatus = 'penyetrikaan';
          break;
        case 'penyetrikaan':
          newStatus = 'packing';
          break;
        case 'packing':
          if (paymentStatus === 'paid') {
            newStatus = 'siapDiantar';
          } else {
            newStatus = 'menungguPembayaran';
          }
          break;
        default:
          return res.status(400).json({ error: 'Invalid status value' });
      }

      try {
        await prisma.workersOnOrders.create({
          data: { workerId: parsedWorkerId, orderId: parsedOrderId },
        });
      } catch (checker) {
        console.warn(
          'Failed to create worker-on-order association (possibly already exists):',
          checker,
        );
      }

      await prisma.order.update({
        where: { orderId: parsedOrderId },
        data: { status: newStatus },
      });

      return res.status(200).json({
        message: 'Task submitted successfully',
      });
    } catch (error) {
      console.error('Error in submitTask:', error);
      return res.status(500).json({
        error: 'Failed to submit task',
      });
    }
  }

  async getDriverJobHistory(req: Request, res: Response) {
    const { driverId } = req.params;
    try {
      const jobHistory = await prisma.driversOnOrders.findMany({
        where: {
          driverId: parseInt(driverId),
          OR: [
            { order: { status: 'laundrySampaiOutlet' } },
            { order: { status: 'selesai' } },
          ],
        },
        include: {
          order: {
            select: {
              orderId: true,
              createdAt: true,
              customer: {
                select: { fullName: true },
              },
              customerAddress: {
                select: { detailAddress: true },
              },
            },
          },
        },
        orderBy: {
          order: {
            createdAt: 'desc',
          },
        },
      });

      res.status(200).json(jobHistory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch driver job history' });
    }
  }

  async getOutletAdminJobHistory(req: Request, res: Response) {
    const { outletAdminId } = req.params;
    try {
      const jobHistory = await prisma.order.findMany({
        where: {
          outletAdminId: parseInt(outletAdminId),
          status: 'selesai',
        },
        include: {
          customer: {
            select: { fullName: true },
          },
          customerAddress: {
            select: { detailAddress: true },
          },
          items: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      res.status(200).json(jobHistory);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'Failed to fetch outlet admin job history' });
    }
  }

  async getWorkerJobHistory(req: Request, res: Response) {
    const { workerId } = req.params;
    try {
      const jobHistory = await prisma.workersOnOrders.findMany({
        where: {
          workerId: parseInt(workerId),
        },
        include: {
          order: {
            select: {
              orderId: true,
              customer: {
                select: { fullName: true },
              },
            },
          },
          worker: {
            select: {
              station: true,
              workerId: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      res.status(200).json(jobHistory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch worker job history' });
    }
  }
}
