import LocationRouter from './location';
import AuthRouter from './user';

const APIPREFIX = '/api/v1';
const AUTHPREFIX = APIPREFIX + '/auth';

const routes = (app) => {
  app.use(APIPREFIX, LocationRouter);
  app.use(AUTHPREFIX, AuthRouter);
  return app;
};

export default routes;
