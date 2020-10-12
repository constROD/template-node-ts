import express, { Application } from "express";
import { ROUTES } from "./routes";

const app: Application = express();

// Routes
const { test } = ROUTES;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use(test.path, test.routes);

export default app;
