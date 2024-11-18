import { NotificationController } from "@/controllers/notification.controller";
import { Router } from "express";

export class NotificationRouter {
    private router : Router
    private notificationController : NotificationController

    constructor() {
        this.notificationController = new NotificationController()
        this.router = Router()
        this.initializeRoutes()

    }
    private initializeRoutes() : void {
        // this.router.post('/', this.notificationController.createNotification)
        this.router.get('/worker/:workerId', this.notificationController.getNotificationForWorker)
        this.router.put('/:notificationId/read', this.notificationController.markNotificationAsRead)
    }

    getRouter(): Router {
        return this.router
    }
}