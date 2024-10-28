import prisma from "@/prisma";
import { Request, Response } from "express";
import { getDistance } from "geolib";

export class OrderController {
  async pickupOrder(req: Request, res: Response) {
    try {
      const { outletLng, outletLat, customerLng, customerLat } = req.body
      console.log("Received Values:", { outletLng, outletLat, customerLng, customerLat });

      const customer = { lat: parseFloat(customerLat), lng: parseFloat(customerLng) }

      const getOutlets = await prisma.outlet.findMany()
      const maxRadius = 2000
      const nearOutlet = getOutlets.filter((outlet) => {
        const outletLoc = { lat: parseFloat(outletLat), lng: parseFloat(outletLng) }
        const distance = getDistance(customer, outletLoc)
        return distance <= maxRadius
      })
      return nearOutlet
      res.status(200).send({
        status: 'ok',
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
}