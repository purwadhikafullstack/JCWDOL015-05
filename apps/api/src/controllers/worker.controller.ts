import prisma from "@/prisma";
import { Request, Response } from "express";

export class WorkerController {
    async getDataByEmployeeId(req: Request, res: Response) {
        const {
            employeeId
        } = req.body
        try {
            const getData = await prisma.worker.findUnique({
                where: { employeeId: employeeId },
                include: {
                    employee: true
                }
            })
            res.status(200).send({
                status: 'ok',
                msg: 'success', data : getData
            })
        } catch (err) {
            res.status(400).send({
                err: err
            })
        }
    }

}