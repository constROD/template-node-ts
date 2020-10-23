import { Request, Response, Router as useRouter } from "express";

const Router: useRouter = useRouter();

Router.get(
  "/",
  async (req: Request, res: Response): Promise<any> => {
    res.status(200).json({ method: "GET", params: req.query });
  }
);

Router.post(
  "/",
  async (req: Request, res: Response): Promise<any> => {
    res.status(200).json({ method: "POST", params: req.query });
  }
);

Router.put(
  "/",
  async (req: Request, res: Response): Promise<any> => {
    res.status(200).json({ method: "PUT", params: req.query });
  }
);

Router.delete(
  "/",
  async (req: Request, res: Response): Promise<any> => {
    res.status(200).json({ method: "DELETE", params: req.query });
  }
);

export default Router;
