import { rootRoutes } from './routes';
import APIMiddleware from './shared/middlewares/Common';
import swaggerDOC from './swagger';

import cors from 'cors';
import express, { Application } from 'express';
import swaggerUI from 'swagger-ui-express';

function createServer() {
  const app: Application = express();

  const { tests } = rootRoutes;

  /* Middlewares */
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  /* Docs */
  app.use('/docs', swaggerUI.serve, swaggerUI.setup({ ...swaggerDOC }));

  /* Routes */
  app.use(tests.path, tests.router);
  app.use('*', APIMiddleware.notFound);

  return app;
}

export default createServer;
