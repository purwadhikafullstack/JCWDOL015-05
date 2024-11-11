import { Request, Response } from 'express';
import prisma from '@/prisma';

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
      await prisma.driversOnOrders.create({
        data: { driverId, orderId, activity: 'pickUp' },
      });
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
      ]);
      return res.status(200).json({ message: 'delivery confirmed' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delivery order' });
    }
  }
}
