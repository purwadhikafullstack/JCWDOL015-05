import { Request, Response } from 'express';
import prisma from '@/prisma';

export class OutletController {
  async getOutlet(req: Request, res: Response) {
    const outletData = await prisma.outlet.findMany();

    return res.status(200).send(outletData);
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
    const { name, provinsi, kota, kecamatan, longitude, latitude } = req.body;

    const newOutletData = await prisma.outlet.create({
      data: { name, provinsi, kota, kecamatan, longitude, latitude },
    });

    return res.status(201).send(newOutletData);
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
            longitude !== undefined ? longitude : existingOutlet.longitude,
          latitude: latitude !== undefined ? latitude : existingOutlet.latitude,
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
