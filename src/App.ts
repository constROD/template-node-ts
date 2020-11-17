import express, { Application } from "express";
import { rootRoutes } from "./routes";

const app: Application = express();

// Routes
const { test } = rootRoutes;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use(test.path, test.routers);

export default app;
