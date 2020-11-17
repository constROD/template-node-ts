import { Request, Response } from "express";

export const useTestController = () => {
  const getTests = (_: Request, res: Response) => {
    res.send("GET");
  };

  const createTest = (_: Request, res: Response) => {
    res.send("POST");
  };

  const updateTest = (_: Request, res: Response) => {
    res.send("PUT");
  };

  const deleteTest = (_: Request, res: Response) => {
    res.send("DELETE");
  };

  return {
    getTests,
    createTest,
    updateTest,
    deleteTest,
  };
};
