import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import { EmployeeRouter } from './routers/employee.router';
import { OutletRouter } from './routers/outlet.router';
import { ItemsRouter } from './routers/items.router';
import { OrderRouter } from './routers/order.router';
import { ReportRouter } from './routers/report.router';
import { AssignmentRouter } from './routers/assignment.router';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error : ', err.stack);
          res.status(500).send('Error !');
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    const employeeRouter = new EmployeeRouter();
    const outletRouter = new OutletRouter();
    const itemsRouter = new ItemsRouter();
    const orderRouter = new OrderRouter();
    const reportRouter = new ReportRouter();
    const assignmentRouter = new AssignmentRouter();

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student API!`);
    });

    this.app.use('/api/employee', employeeRouter.getRouter());
    this.app.use('/api/outlet', outletRouter.getRouter());
    this.app.use('/api/items', itemsRouter.getRouter());
    this.app.use('/api/order', orderRouter.getRouter());
    this.app.use('/api/report', reportRouter.getRouter());
    this.app.use('/api/assignment', assignmentRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
