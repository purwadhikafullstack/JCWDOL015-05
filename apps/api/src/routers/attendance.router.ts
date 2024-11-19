import { AttendanceController } from "@/controllers/attendance.controller";
import { Router } from "express";

export class AttendanceRouter {
    private router : Router
    private attendanceController: AttendanceController

    constructor() {
        this.attendanceController = new AttendanceController()
        this.router = Router()
        this.initializeRouter()
    }
    private initializeRouter(): void {
        this.router.post('/attendance', this.attendanceController.submitAttendanceIn)
        this.router.put('/attendance', this.attendanceController.submitAttendanceOut)
        this.router.get('/attendance/:employeeId', this.attendanceController.getAttendanceLog)
        this.router.get('/attendance', this.attendanceController.getAllAttendanceLogs)
    }
    getRouter(): Router{
        return this.router
    }
}