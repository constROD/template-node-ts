import { createRoute } from "../shared/utils/routes";
import TestRouter from "./Test";

const useRoutes = () => ({
  test: createRoute("/test", TestRouter),
});

export default useRoutes;
