import { Request, Response } from 'express';
import prisma from '@/prisma';

export class OrderController {
  async getOrders(req: Request, res: Response) {
    const orderData = await prisma.order.findMany();

    return res.status(200).send(orderData);
  }
}
