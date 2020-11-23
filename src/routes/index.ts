import { useCreateRoute } from "../shared/utils/routes";
import UserRouter from "./User";

export const rootRoutes = {
  users: useCreateRoute("/v1/users", UserRouter),
};
