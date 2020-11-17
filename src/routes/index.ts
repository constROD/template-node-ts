import { useCreateRoute } from "../shared/utils/routes";
import TestRouter from "./Test";

export const rootRoutes = {
  test: useCreateRoute("/test", TestRouter),
};
