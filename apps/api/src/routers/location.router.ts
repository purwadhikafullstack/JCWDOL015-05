import { LocationController } from "@/controllers/location.controller";
import { Router } from "express";

export class LocationRouter {

  private router: Router
  private locationController: LocationController

  constructor() {
    this.locationController = new LocationController();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.post('/location', this.locationController.createLocation);
  }
  getRouter(): Router {
    return this.router
  }
}