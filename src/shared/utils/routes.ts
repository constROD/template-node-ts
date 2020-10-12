import { Router } from "express";

export const createRoute = (path: string, routes: Router) => {
  return { path, routes };
};
