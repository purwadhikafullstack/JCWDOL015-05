// import { RequestController } from "@/controllers/request.controller";
// import { Router } from "express";

// export class RequestRouter {
//     private router: Router
//     private requestController: RequestController

//     constructor() {
//         this.requestController = new RequestController()
//         this.router = Router()
//         this.initializeRouter()
//     }
//     private initializeRouter(): void {
//         this.router.post('/order', this.requestController.createRequest)
//         this.router.get('/order', this.requestController.getAllRequest)
//         this.router.get('/order/:requestId', this.requestController.getRequestById)
//         this.router.put('/order/confirm', this.requestController.confirmRequest)
//         this.router.put('/order/confirm', this.requestController.updateRequestStatus)

//     }
//     getRouter(): Router{
//         return this.router
//     }
// }