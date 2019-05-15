import express from 'express';
import tokenizer from '../../helpers/tokenizer'
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
  tokenizer.verifyToken,
  LocationController.createSublocation,
);

Router.get(
  '/locations',
  tokenizer.verifyToken,
  LocationController.getAllLocations,
);

Router.get(
  '/locations/summary',
  tokenizer.verifyToken,
  LocationController.summarizeLocationData,
);

Router.get(
  '/locations/:locationId',
  tokenizer.verifyToken,
  LocationController.getLocation,
);

Router.put(
  '/locations/:locationId',
  tokenizer.verifyToken,
  LocationController.updateLocation,
);

Router.delete(
  '/locations/:locationId',
  tokenizer.verifyToken,
  LocationController.deleteLocation,
);

export default Router;
