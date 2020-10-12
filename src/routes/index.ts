import { createRoute } from "../shared/utils/routes";
import TestRouter from "./Test";

export const ROUTES = {
  test: createRoute("/test", TestRouter),
}
