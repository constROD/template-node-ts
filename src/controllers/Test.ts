import { HTTP_RESPONSES, HttpResponseType } from '../shared/constants/Http';
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

  static update(_: Request, res: Response) {
    try {
      const results = TestService.update();
      res.status(results.statusCode).json(results);
    } catch (error) {
      const results = HTTP_RESPONSES[HttpResponseType.ServerError];
      res.status(results.statusCode).json(results);
    }
  }

  static delete(_: Request, res: Response) {
    try {
      const results = TestService.delete();
      res.status(results.statusCode).json(results);
    } catch (error) {
      const results = HTTP_RESPONSES[HttpResponseType.ServerError];
      res.status(results.statusCode).json(results);
    }
  }

  static archive(_: Request, res: Response) {
    try {
      const results = TestService.archive();
      res.status(results.statusCode).json(results);
    } catch (error) {
      const results = HTTP_RESPONSES[HttpResponseType.ServerError];
      res.status(results.statusCode).json(results);
    }
  }

  static restore(_: Request, res: Response) {
    try {
      const results = TestService.restore();
      res.status(results.statusCode).json(results);
    } catch (error) {
      const results = HTTP_RESPONSES[HttpResponseType.ServerError];
      res.status(results.statusCode).json(results);
    }
  }
}

export default TestController;
