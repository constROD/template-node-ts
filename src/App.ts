/* eslint-disable @typescript-eslint/no-unsafe-call */
import { rootRoutes } from './routes';
import CommonMiddleware from './shared/middlewares/Common';
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

  /* Not Found */
  app.use('*', CommonMiddleware.notFound);

  /* Health Check */
  app.get('/health', (_, res) => {
    res.status(200).send({ name: 'api-service', message: `I'm healthy` });
  });

  return app;
};

export default createServer;
