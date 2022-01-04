import rootRoutes from './routes';

import cors from 'cors';
import express, { Application } from 'express';

const app: Application = express();

const { tests } = rootRoutes;

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.use(tests.path, tests.router);

export default app;
