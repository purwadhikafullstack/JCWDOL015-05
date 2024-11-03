import { AuthController } from "@/controllers/auth.controller";
import { Router } from "express";
import passport from "passport";
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
    this.router.post('/reset', this.authController.sendResetPassword);
    this.router.post('/reset/:token', this.authController.resetPassword)
    this.router.get('/auth', passport.authenticate('google', { scope: ["profile", "email"] }));
    this.router.get('/auth/google',
      passport.authenticate('google',
        { scope: ["profile", "email"] }
      ))
    this.router.get('/auth/google/callback',
      passport.authenticate('google',
        { session: false, successRedirect: 'http://localhost:3000' }),
    )
  }

  getRouter(): Router {
    return this.router
  }
}