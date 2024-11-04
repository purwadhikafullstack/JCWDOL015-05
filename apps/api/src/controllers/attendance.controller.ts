import prisma from "@/prisma";
import { Attendance } from "@prisma/client";
import { Request, Response } from "express";

export class AttendanceController {
    async submitAttendanceIn(req: Request, res: Response) {
        const { employeeId } = req.body;

        try {
            const today = new Date();
            const startOfDay = new Date(today.setHours(0, 0, 0, 0));
            const endOfDay = new Date(today.setHours(23, 59, 59, 999));

            // Check if an attendance entry for today already exists
            const existingAttendance = await prisma.attendance.findFirst({
                where: {
                    employeeId,
                    clockIn: {
                        gte: startOfDay,
                        lte: endOfDay,
                    },
                },
            });

            let attendance: Attendance;

            if (existingAttendance) {
                // Update the clock-in time
                attendance = await prisma.attendance.update({
                    where: { attendanceId: existingAttendance.attendanceId },
                    data: { clockIn: new Date() },
                });
            } else {
                // Create a new clock-in record if it doesn’t exist
                attendance = await prisma.attendance.create({
                    data: {
                        employeeId,
                        clockIn: new Date(),
                        clockOut: null,
                    },
                });
            }
            res.status(200).json(attendance);
        } catch (err) {
            res.status(400).json({ error: 'Failed to record clock-in time', details: err });
        }
    }

    async submitAttendanceOut(req: Request, res: Response) {
        const { employeeId } = req.body;

        try {
            const today = new Date();
            const startOfDay = new Date(today.setHours(0, 0, 0, 0));
            const endOfDay = new Date(today.setHours(23, 59, 59, 999));

            // Find the clock-in record for today to add clock-out time
            const existingAttendance = await prisma.attendance.findFirst({
                where: {
                    employeeId,
                    clockIn: {
                        gte: startOfDay,
                        lte: endOfDay,
                    },
                },
            });

            if (!existingAttendance) {
                res.status(404).json({ error: 'Clock-in record not found for today' });
                return;
            }

            // Update the existing entry with clock-out time
            const attendance = await prisma.attendance.update({
                where: { attendanceId: existingAttendance.attendanceId },
                data: { clockOut: new Date() },
            });

            res.status(200).json(attendance);
        } catch (err) {
            res.status(400).json({ error: 'Failed to record clock-out time', details: err });
        }
    }

    async getAttendanceLog(req: Request, res: Response) {
        const { employeeId } = req.params;
    
        if (isNaN(parseInt(employeeId, 10))) {
            return res.status(400).json({ error: 'Invalid employee ID' });
        }
    
        try {
            const attendanceLog: Attendance[] = await prisma.attendance.findMany({
                where: { employeeId: parseInt(employeeId, 10) },
                orderBy: { clockIn: 'desc' },
            });
    
            if (attendanceLog.length === 0) {
                return res.status(404).json({ error: 'No attendance records found for this employee.' });
            }
    
            res.status(200).json(attendanceLog);
        } catch (err) {
            console.error('Error fetching attendance log:', err);
            const errorMessage = (err as { message?: string })?.message || 'An unknown error occurred';
            res.status(500).json({ error: 'Failed to retrieve attendance log', details: errorMessage });
        }
    }

    async getAllAttendanceLogs(req: Request, res: Response) {
        try {
            const attendanceLogs: Attendance[] = await prisma.attendance.findMany({
                orderBy: { clockIn: 'desc' },
            });

            if (attendanceLogs.length === 0) {
                return res.status(404).json({ error: 'No attendance records found.' });
            }

            res.status(200).json(attendanceLogs);
        } catch (err) {
            console.error('Error fetching all attendance logs:', err);
            const errorMessage = (err as { message?: string })?.message || 'An unknown error occurred';
            res.status(500).json({ error: 'Failed to retrieve all attendance logs', details: errorMessage });
        }
    }
}
