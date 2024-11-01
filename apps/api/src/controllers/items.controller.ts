import { Request, Response } from 'express';
import prisma from '@/prisma';

export class ItemsController {
  async getItems(req: Request, res: Response) {
    const itemsData = await prisma.items.findMany();

    return res.status(200).send(itemsData);
  }

  async getItemById(req: Request, res: Response) {
    const { id } = req.params;

    const item = await prisma.items.findUnique({
      where: { itemId: Number(id) },
    });

    if (!item) {
      return res.send(404);
    }

    return res.status(200).send(item);
  }

  async createitem(req: Request, res: Response) {
    const { orderId, item, quantity } = req.body;

    const newItemData = await prisma.items.create({
      data: { orderId, item, quantity },
    });

    return res
      .status(201)
      .send({ message: 'New item has been added', newItemData });
  }

  async updateItemById(req: Request, res: Response) {
    const { id } = req.params;
    const { item, quantity } = req.body;

    try {
      const existingItem = await prisma.items.findUnique({
        where: { itemId: Number(id) },
      });

      if (!existingItem) {
        res.status(404).json({ message: 'Item not found' });
        return;
      }

      const updatedItem = await prisma.items.update({
        where: { itemId: Number(id) },
        data: {
          item: item !== undefined ? item : existingItem.item,
          quantity: quantity !== undefined ? quantity : existingItem.quantity,
        },
      });

      res
        .status(200)
        .json({ message: 'Item updated successfully', updatedItem });
    } catch {
      res.status(500).json({ message: 'Error updating item' });
    }
  }

  async deleteItemById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const deletedItem = await prisma.items.delete({
        where: { itemId: Number(id) },
      });
      return res
        .status(200)
        .send({ message: 'Item deleted successfully', deletedItem });
    } catch (error) {
      return res.status(500).send({
        error: 'Item not found or could not be deleted',
      });
    }
  }
}
