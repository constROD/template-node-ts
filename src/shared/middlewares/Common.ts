import { HTTP_RESPONSES, HttpResponseType } from '../constants/Http';

import { Request, Response } from 'express';

class CommonMiddleware {
  static notFound(_: Request, res: Response): void {
    const response = HTTP_RESPONSES[HttpResponseType.NotFound];
    res.status(response.statusCode).json(response).end();
  }
}

export default CommonMiddleware;
