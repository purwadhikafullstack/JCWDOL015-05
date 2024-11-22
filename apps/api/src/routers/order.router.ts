import { OrderController } from '@/controllers/order.controller';
import { Router } from 'express';

export class OrderRouter {
  private router: Router;
  private orderController: OrderController;

  constructor() {
    this.orderController = new OrderController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.orderController.getOrders);
    this.router.post('/pickup', this.orderController.getNearOutlets);
    this.router.post('/pickup/create', this.orderController.createPickupOrder);
    this.router.post('/', this.orderController.getOrderListbyOutlet);
    this.router.post('/driver', this.orderController.driverOrderList);
    this.router.post(
      '/payment-links',
      this.orderController.generatePaymentLink,
    );
    this.router.post('/order', this.orderController.updatePaymentOrder);
    this.router.post(
      '/completed-order',
      this.orderController.updatePaymentOrder,
    );
    this.router.get('/:customerId', this.orderController.getOrderListCustomer);
  }

  getRouter(): Router {
    return this.router;
  }
}
