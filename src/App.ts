import express, { Application } from "express";
import { rootRoutes } from "./routes";

const app: Application = express();

// Routes
const { test } = rootRoutes;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use(test.url, test.controller);

export default app;
