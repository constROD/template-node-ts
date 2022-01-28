import { HttpResponseType, HTTP_RESPONSES } from '../constants/Http';

import { Request, Response } from 'express';

class APIMiddleware {
  static notFound(_: Request, res: Response): void {
    const result = HTTP_RESPONSES[HttpResponseType.NotFound];
    res.status(result.statusCode);
    res.json(result);
    res.end();
  }
}

export default APIMiddleware;
