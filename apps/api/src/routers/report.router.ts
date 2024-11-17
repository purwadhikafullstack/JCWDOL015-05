import { ReportController } from '@/controllers/report.controller';
import { Router } from 'express';

export class ReportRouter {
  private router: Router;
  private reportController: ReportController;

  constructor() {
    this.reportController = new ReportController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.reportController.getIncomeData);
    this.router.get('/workers', this.reportController.getWorkersPerformance);
    this.router.get('/drivers', this.reportController.getDriversPerformance);
  }

  getRouter(): Router {
    return this.router;
  }
}
