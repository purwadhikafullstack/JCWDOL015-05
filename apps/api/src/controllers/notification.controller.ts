import prisma from "@/prisma";
import { Request, Response } from "express";

export class NotificationController {
    // async createNotification(req: Request, res: Response) {
    //     const {
    //         workerId, orderId, message
    //     } = req.body

    //     try {
    //         const notification = await prisma.notification.create({
    //             data: {
    //                 workerId,
    //                 orderId,
    //                 message
    //             }
    //         })
    //         res.status(200).send(notification)
    //     } catch (err) {
    //         res.status(400).send({
    //             err: err
    //         })
    //     }
    // }

    async getNotificationForWorker(req: Request, res: Response) {
        const {
            workerId
        } = req.params

        try {
            const notifications = await prisma.notification.findMany({
                where: {
                    workerId: parseInt(workerId),
                },
            })
            res.status(200).send(notifications)
        } catch (err) {
            res.status(400).send({
                err: err
            })
        }
    }

    async markNotificationAsRead(req: Request, res: Response) {
        const {
            notificationId
        } = req.params

        try {
            await prisma.notification.update({
                where : {id: parseInt(notificationId)},
                data: {isRead: true}
            })
            res.status(200).send({
                msg : "success"
            })
        } catch (err) {
            res.status(400).send({
                err: err
            })
        }

    }
}