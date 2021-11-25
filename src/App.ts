import cors from 'cors';
import express, { Application } from 'express';
import rootRoutes from './routes';

const app: Application = express();

const { tests } = rootRoutes;

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.use(tests.path, tests.router);

export default app;
