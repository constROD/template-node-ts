import { Request, Response, Router as useRouter } from "express";

const Router: useRouter = useRouter();

Router.get("/", (_: Request, res: Response) => {
  res.send("GET");
});

Router.post("/", (_: Request, res: Response) => {
  res.send("POST");
});

Router.put("/", (_: Request, res: Response) => {
  res.send("PUT");
});

Router.delete("/", (_: Request, res: Response) => {
  res.send("DELETE");
});

export default Router;
