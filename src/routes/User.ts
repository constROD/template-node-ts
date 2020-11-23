import { Router as useRouter } from "express";
import { useUserController } from "../controllers/User";

const Router: useRouter = useRouter();
const { getUsers, createUser, updateUser, deleteUser } = useUserController();

Router.get("/", getUsers);
Router.post("/", createUser);
Router.put("/", updateUser);
Router.delete("/", deleteUser);

export default Router;
