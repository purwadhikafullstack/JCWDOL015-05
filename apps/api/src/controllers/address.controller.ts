import prisma from "@/prisma";
import { Request, Response } from "express";

export class AddressController {
  async createAddress(req: Request, res: Response) {
    try {
      const {
        latitude,
        longitude,
        province,
        city,
        subdistrict,
        detailAddress
      } = req.body
      const newAddress = await prisma.address.create({
        data: {
          customerId: 1,
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          provinsi: province,
          kota: city,
          kecamatan: subdistrict,
          detailAddress
        }
      })
      res.status(200).send({
        status: 'ok',
        data: newAddress
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
}