import { ProcessOrderController } from "@/controllers/processOrder.controller";
import { Router } from "express";

export class ProcessOrderRouter {
    private router : Router
    private processOrderController: ProcessOrderController

    constructor() {
        this.router = Router()
        this.processOrderController = new ProcessOrderController()
        this.initializeRoutes()
    }

    private initializeRoutes(): void {
        this.router.post("/process-order", this.processOrderController.processOrder)
        this.router.get("/:outletId/order", this.processOrderController.washingOrder)
    }
    getRouter(): Router {
        return this.router
    }
}