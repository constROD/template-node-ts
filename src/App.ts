import rootRoutes from './routes';
import APIMiddleware from './shared/middlewares/Api';

import cors from 'cors';
import express, { Application } from 'express';

function createServer() {
  const app: Application = express();

  const { tests } = rootRoutes;

  /* Middlewares */
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  /* Routes */
  app.use(tests.path, tests.router);
  app.use('*', APIMiddleware.notFound);

  return app;
}

export default createServer;
