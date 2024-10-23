import { AuthController } from "@/controllers/auth.controller";
import { Router } from "express";

export class UserRouter {
  private router: Router
  private authController: AuthController

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.post('/register', this.authController.registerUser);
    this.router.post('/login', this.authController.loginUser);
    this.router.post('/verify/:token', this.authController.verificationUser);
  }

  getRouter(): Router {
    return this.router
  }
}