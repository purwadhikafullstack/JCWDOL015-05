import prisma from "@/prisma";
import { Request, Response } from "express";

export class OutletController {
  async createOutlet(req: Request, res: Response) {
    try {
      const {
        name,
        provinsi,
        kota,
        kecamatan,
        longitude,
        latitude,
      } = req.body

      const outlet = await prisma.outlet.create({
        data: {
          name,
          provinsi,
          kota,
          kecamatan,
          longitude,
          latitude
        }
      })
      res.status(200).send({
        status: 'ok',
        data: outlet
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
}