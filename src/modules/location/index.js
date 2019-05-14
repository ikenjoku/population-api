import express from 'express';
import LocationController from './LocationController';

const Router = express.Router();

Router.post(
  '/locations',
  LocationController.createLocation,
);

Router.post(
  '/sublocation',
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
