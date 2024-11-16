import prisma from "@/prisma";
import { OrderStatus, Station } from "@prisma/client";
import { Request, Response } from "express";

export class ProcessOrderController {
    async processOrder(req: Request, res: Response) {
        const { orderId, workerId, items, paymentStatus } = req.body;

        try {
            // Ambil data order dan worker yang terkait
            const order = await prisma.order.findUnique({
                where: { orderId },
                include: {
                    workers: {
                        include: {
                            worker: true, // Include the worker details
                        },
                    },
                    items: true, // Include items
                },
            });

            if (!order) {
                return res.status(404).json({ message: "Order tidak ditemukan." });
            }

            // Validasi apakah workerId sesuai dengan worker yang bertanggung jawab untuk order ini
            const worker = order.workers.find(w => w.worker.workerId === workerId)?.worker;
            
            if (!worker) {
                return res.status(403).json({
                    message: "Anda tidak diizinkan untuk memproses order ini.",
                });
            }

            // Ambil station worker dari order
            // Pengecekan station worker dengan status order saat ini
            const isValidStation =
                (worker.station === Station.washing && order.status === OrderStatus.pencucian) ||
                (worker.station === Station.ironing && order.status === OrderStatus.penyetrikaan) ||
                (worker.station === Station.packing && order.status === OrderStatus.packing);

            if (!isValidStation) {
                return res.status(403).json({
                    message: "Anda tidak diizinkan untuk memproses order ini pada stasiun saat ini.",
                });
            }

            // Validasi item: apakah sudah sesuai dengan item order
            const isValidItems = items.every((item: any) =>
                order.items.some(
                    (dbItem) =>
                        dbItem.item === item.item && dbItem.quantity === item.quantity
                )
            );

            if (!isValidItems) {
                // Jika item tidak sesuai, kirim notifikasi bypass ke admin
                await prisma.notification.create({
                    data: {
                        workerId,
                        orderId,
                        message: "Request bypass untuk validasi item order",
                    },
                });
                return res.status(400).json({ message: "Item tidak sesuai, request bypass ke admin." });
            }

            // Tentukan status berikutnya berdasarkan station worker
            let nextStatus: OrderStatus | undefined;
            let nextWorker: any | null = null;

            // Jika ada pembayaran dan statusnya tidak "paid", maka ubah ke "paid"
            if (paymentStatus && paymentStatus === "paid") {
                // Perbarui paymentStatus menjadi "paid"
                await prisma.order.update({
                    where: { orderId },
                    data: { paymentStatus: "paid" }, // Set status pembayaran menjadi "paid"
                });
            }

            if (worker.station === Station.washing) {
                nextStatus = OrderStatus.penyetrikaan;
                nextWorker = await prisma.worker.findFirst({
                    where: { station: Station.ironing },
                });
            }

            if (worker.station === Station.ironing) {
                nextStatus = OrderStatus.packing;
                nextWorker = await prisma.worker.findFirst({
                    where: { station: Station.packing },
                });
            }

            if (worker.station === Station.packing) {
                nextStatus =
                    order.paymentStatus === "paid"
                        ? OrderStatus.siapDiantar
                        : OrderStatus.menungguPembayaran;
                nextWorker = null; // No next worker after packing
            }

            // Update order ke status stasiun berikutnya jika ada nextStatus
            if (nextStatus) {
                await prisma.order.update({
                    where: { orderId },
                    data: { status: nextStatus },
                });

                // Jika ada worker untuk station selanjutnya, kirim notifikasi
                if (nextWorker) {
                    await prisma.notification.create({
                        data: {
                            workerId: nextWorker.workerId,
                            orderId,
                            message: `Order telah diproses ke stasiun ${nextWorker.station}.`,
                        },
                    });
                }
            }

            return res.status(200).json({ message: "Order berhasil diproses ke station berikutnya." });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Terjadi kesalahan dalam memproses order.",
                error: err,
            });
        }
    }

    async washingOrder(req:Request, res:Response) {
        try {
            const {
                outletId 
            } = req.params

            const washingOrder = await prisma.order.findMany({
                where: {outletId : +outletId},
                include: {items: true}

            })
            res.status(200).send({
                status: "ok",
                data: washingOrder
            })
        } catch (err) {
            res.status(400).send({
                status: "failed",
                err: err
            })
        }
    }

}
