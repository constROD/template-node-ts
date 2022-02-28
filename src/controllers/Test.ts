import { HTTP_RESPONSES, HttpResponseType } from '../shared/constants/Http';
import {
  ITestCreateRequest,
  ITestRetrieveRequest,
  ITestUpdateRequest,
} from '../shared/interfaces/Test';
import TestService from '../shared/services/Test';
import {
  testCreateValidator,
  testRetrieveValidator,
  testUpdateValidator,
} from '../shared/validators/Test';

import { Request, Response } from 'express';

class TestController {
  static async create(req: Request, res: Response) {
    try {
      const request: ITestCreateRequest = req.body;
      const { data, error } = await testCreateValidator(request);

      if (data) {
        const results = TestService.create(data);
        res.status(results.statusCode).json(results);
      } else {
        const results = {
          ...HTTP_RESPONSES[HttpResponseType.UnprocessableEntity],
          error,
        };
        res.status(results.statusCode).json(results);
      }
    } catch (error) {
      const results = HTTP_RESPONSES[HttpResponseType.ServerError];
      res.status(results.statusCode).json(results);
    }
  }

  static async retrieve(req: Request, res: Response) {
    try {
      const request = req.query as unknown as ITestRetrieveRequest;
      const { data, error } = await testRetrieveValidator(request);

      if (data) {
        const results = TestService.retrieve(data);
        res.status(results.statusCode).json(results);
      } else {
        const results = {
          ...HTTP_RESPONSES[HttpResponseType.UnprocessableEntity],
          error,
        };
        res.status(results.statusCode).json(results);
      }
    } catch (error) {
      const results = HTTP_RESPONSES[HttpResponseType.ServerError];
      res.status(results.statusCode).json(results);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const request: ITestUpdateRequest = req.body;
      const { data, error } = await testUpdateValidator(request);

      if (data) {
        const results = TestService.update(data);
        res.status(results.statusCode).json(results);
      } else {
        const results = {
          ...HTTP_RESPONSES[HttpResponseType.UnprocessableEntity],
          error,
        };
        res.status(results.statusCode).json(results);
      }
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
