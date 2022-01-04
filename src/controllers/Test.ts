import { HttpResponseType, HTTP_RESPONSES } from '../shared/constants/Http';
import TestService from '../shared/services/Test';

import { Request, Response } from 'express';

class TestController {
  static create(_: Request, res: Response) {
    try {
      const results = TestService.create();
      res.status(results.statusCode).json(results);
    } catch (error) {
      const results = HTTP_RESPONSES[HttpResponseType.ServerError];
      res.status(results.statusCode).json(results);
    }
  }

  static retrieve(_: Request, res: Response) {
    try {
      const results = TestService.retrieve();
      res.status(results.statusCode).json(results);
    } catch (error) {
      const results = HTTP_RESPONSES[HttpResponseType.ServerError];
      res.status(results.statusCode).json(results);
    }
  }
}

export default TestController;
