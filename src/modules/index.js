import LocationRouter from './location';

const APIPREFIX = '/api/v1';

const routes = (app) => {
  app.use(APIPREFIX, LocationRouter);
  return app;
};

export default routes;
