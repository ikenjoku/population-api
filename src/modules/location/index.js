import express from 'express';
import LocationController from './LocationController';
import validateLocation from '../../middlewares/validateLocation';

const Router = express.Router();

Router.param("locationId", validateLocation);

Router.post(
  '/locations',
  LocationController.createLocation,
);

Router.post(
  '/locations/:locationId/sublocations',
  LocationController.createSublocation,
);

Router.get(
  '/locations',
  LocationController.getLocations,
);

Router.put(
  '/locations/:locationId',
  LocationController.updateLocation,
);

Router.delete(
  '/locations/:locationId',
  LocationController.deleteLocation,
);

export default Router;
