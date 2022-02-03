/* eslint-disable @typescript-eslint/no-unsafe-call */
import { rootRoutes } from './routes';
import APIMiddleware from './shared/middlewares/Common';
import swaggerDOC from './swagger';

import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';
import swaggerUI from 'swagger-ui-express';

const createServer = () => {
  const app: Application = express();

  const { tests } = rootRoutes;

  /* Middlewares */
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(compression());

  /* Docs */
  app.use('/docs', swaggerUI.serve, swaggerUI.setup({ ...swaggerDOC }));

  /* Routes */
  app.use(tests.path, tests.router);
  app.use('*', APIMiddleware.notFound);

  return app;
};

export default createServer;
