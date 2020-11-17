import { Router } from "express";

export const useCreateRoute = (path: string, routers: Router) => {
  return { path, routers };
};
