import createServer from '../App';
import { HttpResponseType, HTTP_RESPONSES } from '../shared/constants/Http';

import { Application } from 'express';
import supertest from 'supertest';

describe('App', () => {
  let app: Application;
  beforeAll(() => {
    app = createServer();
  });

  describe('routes', () => {
    it('should return status 404 for invalid endpoint', async () => {
      const mockResult = HTTP_RESPONSES[HttpResponseType.NotFound];
      const { body } = await supertest(app).get('/nonExistingRoute').expect(404);
      expect(body).toStrictEqual(mockResult);
    });
  });
});
