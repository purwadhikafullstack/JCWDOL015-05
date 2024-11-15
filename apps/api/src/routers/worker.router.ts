import { WorkerController } from "@/controllers/worker.controller";
import { Router } from "express";

export class WorkerRouter {
    private router : Router
    private workerController : WorkerController

    constructor() {
        this.workerController = new WorkerController()
        this.router = Router()
        this.initializeRoutes()

    }
    private initializeRoutes(): void {
        this.router.post('/', this.workerController.getDataByEmployeeId)
    }
    getRouter(): Router {
        return this.router
    }    
}