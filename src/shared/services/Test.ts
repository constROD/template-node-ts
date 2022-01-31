import { HTTP_RESPONSES, HttpResponseType } from '../constants/Http';

class TestService {
  static create() {
    try {
      const results: unknown[] = [];
      return {
        ...HTTP_RESPONSES[HttpResponseType.Created],
        message: 'The record was retrieved successfully.',
        results,
      };
    } catch (error) {
      return {
        ...HTTP_RESPONSES[HttpResponseType.BadRequest],
        message: 'Unable to create.',
        error,
      };
    }
  }

  static retrieve() {
    try {
      const results: unknown[] = [];
      return {
        ...HTTP_RESPONSES[HttpResponseType.Success],
        message: 'The record was retrieved successfully.',
        results,
      };
    } catch (error) {
      return {
        ...HTTP_RESPONSES[HttpResponseType.BadRequest],
        message: 'Unable to retrieve.',
        error,
      };
    }
  }
}

export default TestService;
