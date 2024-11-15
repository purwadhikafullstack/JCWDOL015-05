// import { DriverController } from "@/controllers/driver.controller";
// import { Router } from "express";

// export class DriverRouter{
//     private router: Router
//     private driverController: DriverController

//     constructor() {
//         this.router = Router()
//         this.driverController = new DriverController()
//         this.initializeRoutes()
//     }
//     private initializeRoutes():void {
//         this.router.get('/:driverId/requests', this.driverController.getDriverRequests)
//         this.router.post('/:requestId/accept', this.driverController.acceptRequest)
//         this.router.post('/:requestId/complete', this.driverController.completeOrder)
//         this.router.get('/:driverId/history', this.driverController.getHistory)
//     }

//     getRouter(): Router{
//         return this.router
//     }
// }
