import { OutletController } from '@/controllers/outlet.controller';
import { Router } from 'express';

export class OutletRouter {
  private router: Router;
  private outletController: OutletController;

  constructor() {
    this.outletController = new OutletController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.outletController.getOutlet);
    this.router.get('/:id', this.outletController.getOutletById);
    this.router.post('/', this.outletController.createOutlet);
    this.router.delete('/:id', this.outletController.deleteOutletById);
    this.router.patch('/:id', this.outletController.updateOutletyId);
  }

  getRouter(): Router {
    return this.router;
  }
}
