import { Request, Response } from 'express';
import prisma from '@/prisma';
import { OrderStatus } from '@prisma/client';

export class AssignmentController {
  async orderConfirmation(req: Request, res: Response) {
    const { outletAdminId } = req.params;
    try {
      const orders = await prisma.order.findMany({
        where: {
          outletAdminId: parseInt(outletAdminId),
          status: 'menungguKonfirmasi',
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

  async confirmOrder(req: Request, res: Response) {
    const { orderId } = req.params;
    try {
      await prisma.order.update({
        where: { orderId: parseInt(orderId) },
        data: { status: 'menungguPenjemputanDriver' },
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
      const orders = await prisma.order.findMany({
        where: {
          outletId: parseInt(outletId),
          status: 'menungguPenjemputanDriver',
        },
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
      // Update the weight field in the order table for the specified orderId
      await prisma.order.update({
        where: { orderId },
        data: { weight, status: 'pencucian', totalPrice },
      });

      // Create multiple items associated with the orderId
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
    const { status, action } = req.body;

    // Determine newStatus based on the values of action and status
    let newStatus;
    if (action === 'reject') {
      newStatus = status;
    } else if (action === 'confirm') {
      if (status === 'pencucian') {
        newStatus = 'penyetrikaan';
      } else if (status === 'penyetrikaan') {
        newStatus = 'packing';
      } else if (status === 'packing') {
        newStatus = 'menungguPembayaran';
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

  // DRIVER SECTION

  async getPickup(req: Request, res: Response) {
    const { outletId } = req.params;
    try {
      const orders = await prisma.order.findMany({
        where: {
          outletId: parseInt(outletId),
          status: 'menungguPenjemputanDriver',
          drivers: { none: {} },
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
        },
      });

      res.json(orders);
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
          data: { status: 'sedangDikirim' }, // Adjust status as needed
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
    } catch (error) {}
  }

  async completeDelivery(req: Request, res: Response) {
    const { driverId } = req.body;
    try {
      await prisma.driver.update({
        where: { driverId: driverId },
        data: { isAvailable: true },
      });
      return res.status(200).json({ message: 'Laundry arrived at outlet' });
    } catch (error) {}
  }

  // WORKER SECTION

  async getTask(req: Request, res: Response) {
    try {
      const { status, outletId } = req.params;

      // Determine the order status based on the passed value
      let orderStatus: OrderStatus | undefined;
      if (status === 'washing') orderStatus = 'pencucian' as OrderStatus;
      else if (status === 'ironing')
        orderStatus = 'penyetrikaan' as OrderStatus;
      else if (status === 'packing') orderStatus = 'packing' as OrderStatus;

      if (!orderStatus) {
        return res.status(400).json({ error: 'Invalid status value' });
      }

      // Parse outletId to integer
      const outletIdInt = parseInt(outletId, 10);
      if (isNaN(outletIdInt)) {
        return res.status(400).json({ error: 'Invalid outletId value' });
      }

      // Fetch orders with specified status and outletId, and include items
      const order = await prisma.order.findFirst({
        where: {
          status: orderStatus,
          outletId: outletIdInt,
          bypassMessage: null,
        },
        include: {
          items: true, // Include items to get item name and quantity
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
    const { bypassMessage } = req.body;
    try {
      await prisma.order.update({
        where: { orderId: parseInt(orderId) },
        data: { bypassMessage },
      });

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
    const { workerId, status } = req.body;

    // Validate `orderId` and `workerId` are numbers
    const parsedOrderId = parseInt(orderId);
    const parsedWorkerId = parseInt(workerId);

    if (isNaN(parsedOrderId) || isNaN(parsedWorkerId)) {
      return res.status(400).json({ error: 'Invalid orderId or workerId' });
    }

    try {
      // Determine the next status based on current status
      let newStatus: OrderStatus | undefined;
      switch (status) {
        case 'pencucian':
          newStatus = 'penyetrikaan';
          break;
        case 'penyetrikaan':
          newStatus = 'packing';
          break;
        case 'packing':
          newStatus = 'menungguPembayaran';
          break;
        default:
          return res.status(400).json({ error: 'Invalid status value' });
      }

      // Perform the transaction to add worker and update order status
      await prisma.$transaction([
        prisma.workersOnOrders.create({
          data: { workerId: parsedWorkerId, orderId: parsedOrderId },
        }),
        prisma.order.update({
          where: { orderId: parsedOrderId },
          data: { status: newStatus },
        }),
      ]);

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
}
