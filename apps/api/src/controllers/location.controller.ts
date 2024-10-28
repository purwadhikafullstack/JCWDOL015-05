import prisma from '@/prisma'
import { geocodeAddress } from '@/services/geocode'
import { Prisma } from '@prisma/client'
import { Request, Response } from 'express'
import { } from 'opencage-api-client'
export class LocationController {
  async createLocation(req: Request, res: Response) {
    const { address } = req.body
    try {
      const { latitude, longitude }: any = await geocodeAddress(address)

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

  async getProvinsi(req: Request, res: Response) {
    try {
      const getData = await prisma.listAddress.findMany({
        select: { province: true },
      })
      const filterSameData = Array.from(
        new Set(
          getData.map(province => province.province))
      ).map(filtered => ({ province: filtered }))
      res.status(200).send({
        status: 'ok',
        data: filterSameData
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
  async getKabupaten(req: Request, res: Response) {
    try {
      const { province } = req.query

      const getData = await prisma.listAddress.findMany({
        select: { city: true }, where: { province: province as string }
      })
      const filterSameData = Array.from(
        new Set(
          getData.map(city => city.city))
      ).map(filtered => ({ city: filtered }))
      res.status(200).send({
        status: 'ok',
        data: filterSameData
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
  async getKecamatan(req: Request, res: Response) {
    try {
      const { city } = req.query
      const cityPrefix = `Kota ${city}`
      const getData = await prisma.listAddress.findMany({
        select: { subdistrict: true, id: true, cityId: true, provinceId: true }, where: { city: city as string }
      })
      res.status(200).send({
        status: 'ok',
        data: getData
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
  async getLocation(req: Request, res: Response) {
    try {
      const { province, city, subdistrict } = req.query
      const getData = await prisma.listAddress.findMany({
        where: {
          province: province as string,
          city: city as string,
          subdistrict: subdistrict as string
        }
      })
      res.status(200).send({
        status: 'ok',
        data: getData
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
}