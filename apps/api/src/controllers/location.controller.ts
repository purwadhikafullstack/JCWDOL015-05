import prisma from '@/prisma'
import { geocodeAddress } from '@/services/geocode'
import { Request, Response } from 'express'
import { } from 'opencage-api-client'
export class LocationController {
  async createLocation(req: Request, res: Response) {
    const { address } = req.body
    try {
      const { latitude, longitude }: any = await geocodeAddress(address)
      // const newAddress = await prisma.address.create({
      //   data: {
      //     latitude,
      //     longitude,
      //     customerId: 1
      //   }
      // })
      res.status(200).send({
        status: 'ok',
        latitude: latitude,
        longitude: longitude
      })
    } catch (error) {
      res.status(400).send({
        status: 'failed',
        error
      })
    }
  }
}