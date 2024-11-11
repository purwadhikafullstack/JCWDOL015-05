import { AssignmentController } from '@/controllers/assignment.controller';
import { Router } from 'express';

export class AssignmentRouter {
  private router: Router;
  private assignmentController: AssignmentController;

  constructor() {
    this.assignmentController = new AssignmentController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      '/order-confirmation/:outletAdminId',
      this.assignmentController.orderConfirmation,
    );
    this.router.get(
      '/item-input/:outletAdminId',
      this.assignmentController.itemInput,
    );
    this.router.patch(
      '/confirm-order/:orderId',
      this.assignmentController.confirmOrder,
    );
    this.router.post('/item-submit', this.assignmentController.itemSubmit);
    this.router.get(
      '/bypass-request/:outletId',
      this.assignmentController.bypassRequest,
    );
    this.router.patch(
      '/confirm-bypass/:orderId',
      this.assignmentController.confirmBypass,
    );

    // DRIVER SECTION

    this.router.get(
      '/get-pickup/:outletId',
      this.assignmentController.getPickup,
    );
    this.router.post(
      '/confirm-pickup',
      this.assignmentController.confirmPickup,
    );
    this.router.get(
      '/get-delivery/:outletId',
      this.assignmentController.getDelivery,
    );
    this.router.post(
      '/confirm-delivery',
      this.assignmentController.confirmDelivery,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
