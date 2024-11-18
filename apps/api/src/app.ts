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
// import { SampleRouter } from './routers/sample.router';
import { AuthController } from './controllers/auth.controller';
import { UserRouter } from './routers/user.router';
import { LocationRouter } from './routers/location.router';
import { AddressRouter } from './routers/address.router';
import { OrderRouter } from './routers/order.router';
import passport from 'passport';
import '@/services/passportConfig'
import cron from 'node-cron'
import prisma from './prisma';
import path from 'path'
export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
    this.privateSetupCron()
  }

  private configure(): void {
    
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));

    this.app.use('/api/public',
      express.static(path.join(__dirname, "../public/"))
    )
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
    // const sampleRouter = new SampleRouter();
    const authRouter = new UserRouter()
    const locationRouter = new LocationRouter()
    const addressRouter = new AddressRouter()
    const orderRouter = new OrderRouter()
    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student API!`);
    });
    this.app.use(passport.initialize())
    // this.app.use('/api/samples', sampleRouter.getRouter());
    this.app.use('/api/users', authRouter.getRouter())
    this.app.use('/api/location', locationRouter.getRouter())
    this.app.use('/api/addresses', addressRouter.getRouter())
    this.app.use('/api/orders', orderRouter.getRouter())
  }
  privateSetupCron ():void{
    cron.schedule('0 0 * * *', async()=> {
      console.log("Running Cron Job auto confirmation")
      try {
        const thresholdDate = new Date()
        thresholdDate.setHours(thresholdDate.getHours() - 48);
        
        await prisma.order.updateMany({
          where : {
            status: "sedangDikirim",
            deliverDate : thresholdDate
          },
          data: {
            status: "selesai"
          }
        })
        console.log("Auto-confirmation job completed successfully.");
      } catch (error) {
        console.error("Error in auto-confirmation job:", error)
      }
    })
  }
  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
