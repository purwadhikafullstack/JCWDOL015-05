import { EmployeeController } from '@/controllers/employee.controller';
import { Router } from 'express';

export class EmployeeRouter {
  private router: Router;
  private employeeController: EmployeeController;

  constructor() {
    this.employeeController = new EmployeeController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.employeeController.getEmployee);
    this.router.get('/:id', this.employeeController.getEmployeeById);
    this.router.post('/', this.employeeController.createEmployee);
    this.router.delete('/:id', this.employeeController.deleteEmployeeById);
    this.router.patch('/:id', this.employeeController.updateEmployeeById);
  }

  getRouter(): Router {
    return this.router;
  }
}
