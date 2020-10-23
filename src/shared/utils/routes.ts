import { Router } from "express";

export const createRoute = (url: string, controller: Router) => {
  return { url, controller };
};
