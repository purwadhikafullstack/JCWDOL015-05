// import prisma from "@/prisma";
// import { Request, Response } from "express";


// export class RequestController {
//     async createRequest(req: Request, res: Response) {
//         const {
//             customerId, address
//         } = req.body

//         try {
//             const newRequest = await prisma.request.create({
//                 data: {
//                     customerId,
//                     address,
                  
//                 }
//             })
//             res.status(201).json(newRequest)
//         } catch (err) {
//             res.status(400).send({
//                 err: err
//             })
//         }
//     }

//     async getAllRequest(req: Request, res: Response) {
//         try {
//             const request = await prisma.request.findMany({
//                 include: {
//                     customer: true,
//                     driver: true
//                 }
//             })
//             res.status(200).json(request)
//         } catch (err) {
//             res.status(400).send({
//                 err: err
//             })
//         }
//     }

//     async getRequestById(req: Request, res: Response) {
//         const { requestId } = req.params

//         try {
//             const request = await prisma.request.findUnique({
//                 where: { requestId: parseInt(requestId) },
//                 include: {
//                     customer: true,
//                     driver: true
//                 }
//             })
//             if (!request) {
//                 return res.status(404).json({ message: "request not found" })
//             }
//             res.status(200).json({request})
//         } catch (err) {
//             res.status(400).send({
//                 err: err
//             })
//         }
//     }
//  async confirmRequest(req: Request, res: Response) {
//         const { requestId, driverId } = req.body;

//         // Validate inputs
//         if (!requestId || !driverId) {
//             return res.status(400).json({
//                 error: 'Invalid request: requestId and driverId are required'
//             });
//         }

//         try {
//             // Update request status and assign driver
//             const updatedRequest = await prisma.request.update({A
//                 where: { requestId: parseInt(requestId) },
//                 data: {
//                     driverId: parseInt(driverId),
//                     status: 'laundryMenujuOutlet'
//                 }
//             });
//             res.status(200).json(updatedRequest);
//         } catch (err) {
//             console.error("Error updating request:", err); // Log error for debugging
//             res.status(500).json({
//                 error: 'Failed to confirm request',
//                 details: err instanceof Error ? err.message : 'Unknown error'
//             });
//         }
//     }

//     async updateRequestStatus(req: Request, res: Response) {
//         const { requestId, status } = req.body;

//         try {
//             const updatedRequest = await prisma.request.update({
//                 where: { requestId: parseInt(requestId) },
//                 data: { status }
//             });
//             res.status(200).json(updatedRequest);
//         } catch (err) {
//             console.error("Error updating request status:", err); // Log error for debugging
//             res.status(500).send({
//                 error: 'Failed to update request status',
//                 details: err instanceof Error ? err.message : 'Unknown error'
//             });
//         }
//     }

// }