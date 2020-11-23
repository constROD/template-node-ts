import express, { Application } from "express";
import { rootRoutes } from "./routes";

const app: Application = express();

// Routes
const { users } = rootRoutes;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use(users.path, users.router);

export default app;
