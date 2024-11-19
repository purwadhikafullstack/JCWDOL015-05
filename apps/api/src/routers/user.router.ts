import { AuthController } from "@/controllers/auth.controller";
import { uploader } from "@/middleware/multer";
import { Router } from "express";
import passport from "passport";
// import passport from "../services/passportConfig";
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
    this.router.get('/:customerId', this.authController.getUserById)
    this.router.post('/verify/:token', this.authController.verificationUser);
    this.router.post('/reset', this.authController.sendResetPassword);
    this.router.post('/reset/:token', this.authController.resetPassword)
    this.router.get('/auth', passport.authenticate('google', { scope: ["profile", "email"] }));
    this.router.patch('/edit',
      uploader('avatar-', '/avatar').single('avatar')
      ,this.authController.editProfile)
      this.router.get('/auth/google', (req, res, next) => {
        console.log('Google login route hit');
        next();
      }, passport.authenticate('google', { scope: ['profile', 'email'] }));
 
    this.router.get('/auth/google/callback', (req, res, next) => {
      console.log('Callback route hit');
      next();
    }, passport.authenticate('google', { session: false }), (req, res) => {
      res.send('Authentication successful');
    });
    
    
    
  }

  getRouter(): Router {
    return this.router
  }
}