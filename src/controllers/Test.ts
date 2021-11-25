import { Request, Response } from 'express';
import { HttpResponseType, HTTP_RESPONSES } from '../shared/constants/Http';
import TestService from '../shared/services/Test';

class TestController {
  static async create(_: Request, res: Response) {
    try {
      const results = await TestService.create();
      res.status(results.statusCode).json(results);
    } catch (error) {
      const results = HTTP_RESPONSES[HttpResponseType.ServerError];
      res.status(results.statusCode).json(results);
    }
  }

  static async retrieve(_: Request, res: Response) {
    try {
      const results = await TestService.retrieve();
      res.status(results.statusCode).json(results);
    } catch (error) {
      const results = HTTP_RESPONSES[HttpResponseType.ServerError];
      res.status(results.statusCode).json(results);
    }
  }
}

export default TestController;
