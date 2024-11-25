import { LocationController } from '@/controllers/location.controller';
import { CopyLocation } from '@/services/copylocation';
import { Router } from 'express';

export class LocationRouter {
  private router: Router;
  private locationController: LocationController;
  private copyLocation: CopyLocation;

  constructor() {
    this.locationController = new LocationController();
    this.copyLocation = new CopyLocation();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.post('/', this.locationController.getLngLat);
    this.router.get('/copyDetail', this.copyLocation.copyDetailLocation);
    this.router.get('/provinces', this.locationController.getProvinsi);
    this.router.get('/city', this.locationController.getKabupaten);
    this.router.get('/subdistricts', this.locationController.getKecamatan);
    this.router.get('/', this.locationController.getLocation);
  }
  getRouter(): Router {
    return this.router;
  }
}
