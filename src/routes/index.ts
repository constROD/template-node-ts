import { createRoute } from "../shared/utils/routes";
import TestRouter from "./Test";

export const rootRoutes = {
  test: createRoute("/test", TestRouter),
};
