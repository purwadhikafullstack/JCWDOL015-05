import { AddressController } from "@/controllers/address.controller";
import { Router } from "express";

export class AddressRouter {
  private router: Router
  private addressController: AddressController

  constructor() {
    this.addressController = new AddressController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/', this.addressController.createAddress);
    this.router.get('/:customerId', this.addressController.getUserAddress);
  }

  getRouter(): Router {
    return this.router
  }
}