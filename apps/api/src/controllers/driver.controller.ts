import prisma from '@/prisma';
import { Request, Response } from 'express';

export class DriverController {
  // Get all pickup/delivery requests for a specific driver
  async getDriverRequests(req: Request, res: Response) {
    const { driverId } = req.params;

    try {
      const requests = await prisma.driversOnOrders.findMany({
        where: { driverId: parseInt(driverId), status: 'Pending' },
        include: { order: true },
      });
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch driver requests' });
    }
  }

  // Accept a request for pickup/delivery
  async acceptRequest(req: Request, res: Response) {
    const { requestId } = req.params; // requestId adalah orderId atau ID lain yang relevan

    try {
      const updatedDriverOrder = await prisma.driversOnOrders.updateMany({
        where: {
          orderId: parseInt(requestId), // menggunakan orderId dari request
          status: 'Pending', // hanya memperbarui yang statusnya Pending
        },
        data: {
          status: 'Accepted', // status diubah menjadi Accepted
        },
      });

      if (updatedDriverOrder.count === 0) {
        return res
          .status(404)
          .json({ message: 'Order not found or already accepted.' });
      }

      return res.status(200).json({ message: 'Order accepted successfully.' });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: 'An error occurred while accepting the request.' });
    }
  }

  // Fungsi untuk menyelesaikan order
  async completeOrder(req: Request, res: Response) {
    const { requestId } = req.params;

    try {
      const updatedDriverOrder = await prisma.driversOnOrders.updateMany({
        where: {
          orderId: parseInt(requestId),
          status: 'Accepted', // hanya memperbarui yang statusnya Accepted
        },
        data: {
          status: 'Completed', // status diubah menjadi Completed
        },
      });

      if (updatedDriverOrder.count === 0) {
        return res
          .status(404)
          .json({ message: 'Order not found or not accepted yet.' });
      }

      return res.status(200).json({ message: 'Order completed successfully.' });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: 'An error occurred while completing the order.' });
    }
  }

  // View driver’s history of pickups and deliveries
  async getHistory(req: Request, res: Response) {
    const { driverId } = req.params;

    try {
      const history = await prisma.driversOnOrders.findMany({
        where: { driverId: parseInt(driverId), status: 'Completed' },
        include: { order: true },
      });
      res.json(history);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch history' });
    }
  }
}
