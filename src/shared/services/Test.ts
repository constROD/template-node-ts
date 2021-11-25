import { HttpResponseType, HTTP_RESPONSES } from '../constants/Http';

class TestService {
  static async create() {
    try {
      const results: any[] = [];
      return { ...HTTP_RESPONSES[HttpResponseType.Created], message: 'The record was retrieved successfully.', results };
    } catch (error) {
      return { ...HTTP_RESPONSES[HttpResponseType.BadRequest], message: 'Unable to create.', error };
    }
  }

  static async retrieve() {
    try {
      const results: any[] = [];
      return { ...HTTP_RESPONSES[HttpResponseType.Success], message: 'The record was retrieved successfully.', results };
    } catch (error) {
      return { ...HTTP_RESPONSES[HttpResponseType.BadRequest], message: 'Unable to retrieve.', error };
    }
  }
}

export default TestService;
