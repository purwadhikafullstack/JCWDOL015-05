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
        detailAddress,
        customerId
      } = req.body
      const newAddress = await prisma.address.create({
        data: {
          customerId: customerId,
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
  async mainAddress(req: Request, res : Response) {
    try {
      const {customerId, addressId} = req.body

      const checkUserAddress = await prisma.address.findMany({
        where : {
          customerId : +customerId,
        }
      })
    for (let address of checkUserAddress) {
      if (address.isPrimary) {
        await prisma.address.update({
          where: { addressId: +address.addressId , isPrimary: true},
          data: {
            isPrimary: false,
          },
        });
      }
    }
      await prisma.address.update({
        where: {addressId: +addressId},
        data: {
          isPrimary: true
        }
      })
      res.status(200).send({
        status: 'ok',
        message: `address ${addressId} updated to primary`
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        err: err
      })
    }
  }
  async deleteAddress(req: Request, res: Response){
    try {
      const {addressId} = req.params
      const deleteAddress = await prisma.address.delete({
        where: {addressId: +addressId}
      })
      res.status(200).send({
        status: 'ok',
        data: deleteAddress,
        message: `Berhasil Menghapus Alamat`
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        err: err
      })
    }
  }
  async getUserAddress(req: Request, res: Response) {
    try {
      const {
        customerId
      } = req.params
      const checkUser = await prisma.customer.findUnique({
        where: { customerId: +customerId }
      })
      if (!checkUser) throw 'user not found'
      const userAddress = await prisma.address.findMany({
        where: { customerId: +customerId }
      })
      res.status(200).send({
        status: 'ok',
        data: userAddress
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
}