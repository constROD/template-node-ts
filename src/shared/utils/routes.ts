import { Router } from "express";

export const useCreateRoute = (path: string, router: Router) => {
  return { path, router };
};
