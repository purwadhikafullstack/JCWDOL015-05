import { ItemsController } from '@/controllers/items.controller';
import { Router } from 'express';

export class ItemsRouter {
  private router: Router;
  private itemsController: ItemsController;

  constructor() {
    this.itemsController = new ItemsController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.itemsController.getItems);
    this.router.get('/:id', this.itemsController.getItemById);
    this.router.post('/', this.itemsController.createitem);
    this.router.delete('/:id', this.itemsController.deleteItemById);
    this.router.patch('/:id', this.itemsController.updateItemById);
  }

  getRouter(): Router {
    return this.router;
  }
}
