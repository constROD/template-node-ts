import { Router as useRouter } from "express";
import { useTestController } from "../controllers/Test";

const Router: useRouter = useRouter();
const { getTests, createTest, updateTest, deleteTest } = useTestController();

Router.get("/", getTests);
Router.post("/", createTest);
Router.put("/", updateTest);
Router.delete("/", deleteTest);

export default Router;
