import { Request, Response } from 'express';
import prisma from '@/prisma';

export class OutletController {
  async getOutlet(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;

      const sortBy = req.query.sortBy === 'desc' ? 'desc' : 'asc';

      const nameFilter = req.query.name ? String(req.query.name) : undefined;
      const kotaFilter = req.query.kota ? String(req.query.kota) : undefined;

      const outletData = await prisma.outlet.findMany({
        skip,
        take: limit,
        orderBy: {
          outletId: sortBy,
        },
        where: {
          ...(nameFilter && {
            name: { contains: nameFilter },
          }),
          ...(kotaFilter && {
            kota: { contains: kotaFilter.toLowerCase() },
          }),
        },
      });

      const totalOutlets = await prisma.outlet.count({
        where: {
          ...(nameFilter && {
            name: { contains: nameFilter.toLowerCase() },
          }),
          ...(kotaFilter && {
            kota: { contains: kotaFilter.toLowerCase() },
          }),
        },
      });

      const totalPages = Math.ceil(totalOutlets / limit);

      return res.status(200).json({
        data: outletData,
        pagination: {
          totalItems: totalOutlets,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
      });
    } catch (error) {
      console.error('Error fetching outlets:', error);
      return res.status(500).json({ error: 'Failed to fetch outlets' });
    }
  }

  async getOutletById(req: Request, res: Response) {
    const { id } = req.params;

    const outlet = await prisma.outlet.findUnique({
      where: { outletId: Number(id) },
    });

    if (!outlet) {
      return res.send(404);
    }

    return res.status(200).send(outlet);
  }

  async createOutlet(req: Request, res: Response) {
    try {
      const { name, provinsi, kota, kecamatan, longitude, latitude } = req.body;
      const newOutletData = await prisma.outlet.create({
        data: {
          name,
          provinsi,
          kota,
          kecamatan,
          longitude: parseFloat(longitude),
          latitude: parseFloat(latitude),
        },
      });
      res.status(200).send({
        status: 'ok',
        data: newOutletData,
      });
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err,
      });
    }
  }

  async updateOutletyId(req: Request, res: Response) {
    const { id } = req.params;
    const { name, provinsi, kota, kecamatan, longitude, latitude } = req.body;

    try {
      const existingOutlet = await prisma.outlet.findUnique({
        where: { outletId: Number(id) },
      });

      if (!existingOutlet) {
        res.status(404).json({ message: 'Outlet not found' });
        return;
      }

      const updatedOutlet = await prisma.outlet.update({
        where: { outletId: Number(id) },
        data: {
          name: name !== undefined ? name : existingOutlet.name,
          provinsi: provinsi !== undefined ? provinsi : existingOutlet.provinsi,
          kota: kota !== undefined ? kota : existingOutlet.kota,
          kecamatan:
            kecamatan !== undefined ? kecamatan : existingOutlet.kecamatan,
          longitude:
            longitude !== undefined
              ? parseFloat(longitude)
              : existingOutlet.longitude,
          latitude:
            latitude !== undefined
              ? parseFloat(latitude)
              : existingOutlet.latitude,
        },
      });

      res
        .status(200)
        .json({ message: 'Outlet updated successfully', updatedOutlet });
    } catch {
      res.status(500).json({ message: 'Error updating Outlet' });
    }
  }

  async deleteOutletById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const deletedOutlet = await prisma.outlet.delete({
        where: { outletId: Number(id) },
      });
      return res
        .status(200)
        .send({ message: 'Outlet delete successfully', deletedOutlet });
    } catch (error) {
      return res.status(500).send({
        error: 'Item not found or could not be deleted',
      });
    }
  }
}
