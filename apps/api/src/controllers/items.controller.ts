import { Request, Response } from 'express';
import prisma from '@/prisma';

export class ItemsController {
  async getItems(req: Request, res: Response) {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const sortBy = (req.query.sortBy as string) || 'itemId';
    const order = (req.query.order as string) === 'desc' ? 'desc' : 'asc';
    const orderId = req.query.orderId
      ? parseInt(req.query.orderId as string)
      : undefined;
    const itemName = (req.query.item as string) || undefined;
    const filter = {
      ...(orderId && { orderId }),
      ...(itemName && { item: { contains: itemName.toLowerCase() } }),
    };

    try {
      const itemsData = await prisma.items.findMany({
        where: filter,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { [sortBy]: order },
      });

      const totalItems = await prisma.items.count({ where: filter });
      const totalPages = Math.ceil(totalItems / limit);

      res.status(200).json({
        data: itemsData,
        pagination: {
          page,
          limit,
          totalPages,
          totalItems,
        },
      });
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Error fetching items' });
    }
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

    try {
      const newItemData = await prisma.items.create({
        data: { orderId, item, quantity },
      });

      return res
        .status(201)
        .send({ message: 'New item has been added', newItemData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create item' });
    }
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
