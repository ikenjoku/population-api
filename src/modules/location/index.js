import express from 'express';
import LocationController from './LocationController';

const Router = express.Router();

Router.post(
  '/locations',
  LocationController.createLocation,
);

Router.get(
  '/locations',
  LocationController.getLocations,
);

export default Router;
