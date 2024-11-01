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
    //  this.router.get('/:id', this.employeeController.getEmployeeById);
    //  this.router.post('/', this.employeeController.createEmployee);
    //  this.router.delete('/:id', this.employeeController.deleteEmployeeById);
    //  this.router.patch('/:id', this.employeeController.updateEmployeeyId);
  }

  getRouter(): Router {
    return this.router;
  }
}
