import prisma from "@/prisma";
import { Request, Response } from "express";
import { getDistance } from "geolib";

export class OrderController {
  async getNearOutlets(req: Request, res: Response) {
    try {
      const {
        addressId,
        customerId
      } = req.body
      if (!customerId) throw 'customer location not found'
      const getCustomerLoc = await prisma.address.findUnique({
        where: { addressId: +addressId, customerId: +customerId }
      })
      const customerLoc = { lat: getCustomerLoc?.latitude!, lng: getCustomerLoc?.longitude! }
      // const customer = { lat: parseFloat(customerLat), lng: parseFloat(customerLng) }
      const totalOutlet = await prisma.outlet.count()
      const getOutlets = await prisma.outlet.findMany()
      const maxRadius = 2000
      // const nearOutlet = getOutlets.filter((outlet) => {
      //   const outletLoc = { lat: outlet.latitude!, lng: outlet.longitude! }
      //   const distance = getDistance(customerLoc, outletLoc)
      //   console.log(distance)
      //   const nearOutlet = distance <= maxRadius
      //   // return distance <= maxRadius
      //   return { nearOutlet, distance, ...outlet }
      // })
      const nearOutlet = getOutlets.map((outlet) => {
        const outletLoc = { lat: outlet.latitude!, lng: outlet.longitude! }
        const distance = getDistance(customerLoc, outletLoc)
        const distanceResult = distance > 1000 ? `${(distance / 1000).toFixed(2)}km` : `${distance}m`
        const nearOutlet = distance <= maxRadius
        return { ...outlet, nearOutlet, jarak: `${distanceResult}` }
      })
      const filterOutlet = nearOutlet.filter((outlet) => outlet.nearOutlet == true)
      const totalNearOutlet = nearOutlet.length
      res.status(200).send({
        status: 'ok',
        // allOutlets: getOutlets,
        totalFoundOutlet: totalNearOutlet,
        data: filterOutlet
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
  async createPickupOrder(req: Request, res: Response) {
    try {
      const {
        customerId,
        outletId,
        addressId,
        pickupDate,
        pickupTime, status
      } = req.body

      const prismaTransaction = await prisma.$transaction(async (pt) => {
        // check customerid
        const existCustomer = await pt.customer.findUnique({
          where: { customerId: customerId }
        })
        if (!existCustomer) throw 'customer not found'
        // check outletid
        const existOutlet = await pt.outlet.findUnique({
          where: { outletId: outletId }
        })
        if (!existOutlet) throw 'outlet not found'
        // check addressid
        const existAddress = await pt.address.findUnique({
          where: { addressId: addressId }
        })
        if (!existAddress) throw 'address user not found'
        const newOrder = await pt.order.create({
          data: {
            customerId,
            outletId,
            status: "menungguPenjemputanDriver",
            customerAddressId: addressId,
            pickupDate: new Date(pickupDate),
            pickupTime,
          }
        })
        return { newOrder }
      })
      res.status(200).send({
        status: 'ok',
        data: prismaTransaction.newOrder
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
  async getOrderListbyOutlet(req: Request, res: Response) {
    try {
      const {
        outletId
      } = req.body
      const getOrder = await prisma.order.findMany({
        where: { outletId: +outletId },
        include: {
          customer: true,
          drivers: true,
          outlet: true,
          outletAdmin: true,
          workers: true
        }
      })
      res.status(200).send({
        status: 'ok',
        data: getOrder
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
  async confirmOrder(req: Request, res: Response) {
    try {
      const {
        orderId,
        outletAdminId,
      } = req.body
      const confirmOrder = await prisma.order.update({
        where: { orderId: +orderId },
        data: {
          outletAdminId: +outletAdminId,
        }
      })
      res.status(200).send({
        status: 'ok',
        data: confirmOrder
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
  async driverOrderList(req: Request, res: Response) {
    try {
      const {
        outletId } = req.body
      const listOrder = await prisma.order.findMany({
        where: { outletId: outletId, status: "menungguPenjemputanDriver" }
      })
      const filter = listOrder.filter((order) => order.outletAdminId !== null)
      res.status(200).send({
        status: 'ok',
        // orderOutlet: listOrder,
        data: filter
      })
    } catch (err) {
      res.status(400).send({
        status: 'failed',
        error: err
      })
    }
  }
async generatePaymentLink (req: Request, res: Response) {
    try {
      const {orderId , customerId, outletsId, weight , price} = req.body
      // const checkUser = await prisma.customer.findUnique({
      //   where : {customerId : customerId}
      // })
      const parameter = {
        transaction_details : {
          order_id : orderId,
          gross_amount : price * weight
        },
        // customer_details : {
        //   email : checkUser?.email!,
        //   first_name : checkUser?.fullName,
        // }
      }
      const url = `https://api.sandbox.midtrans.com`
      const secret = process.env.MIDTRANS_SECRET_KEY!
      const encodedKey = Buffer.from(secret).toString('base64')
      const paymentLink = await fetch (`${url}/v1/payment-links`,{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          "Authorization" : `Basic ${encodedKey}`,
          "Accept" : "application/json"
        },
        body: JSON.stringify(parameter)
      })
      const response = await paymentLink.json()
      
      res.status(200).send({
        status : 'ok',
        data: response
      })

    } catch (err) {
      res.status(400).send({
        status : 'failed',
        error : err
      })
    }
  }
}