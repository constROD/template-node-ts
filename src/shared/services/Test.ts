import { HTTP_RESPONSES, HttpResponseType } from '../constants/Http';
import { IHttpResponse } from '../interfaces/Http';

class TestService {
  static create(): IHttpResponse {
    try {
      const records: unknown[] = [];
      return {
        ...HTTP_RESPONSES[HttpResponseType.Created],
        message: 'The record was created successfully.',
        records,
      };
    } catch (error) {
      return {
        ...HTTP_RESPONSES[HttpResponseType.BadRequest],
        message: 'Unable to create.',
        error,
      };
    }
  }

  static retrieve(): IHttpResponse {
    try {
      const records: unknown[] = [];
      return {
        ...HTTP_RESPONSES[HttpResponseType.Success],
        message: 'The record was retrieved successfully.',
        records,
      };
    } catch (error) {
      return {
        ...HTTP_RESPONSES[HttpResponseType.BadRequest],
        message: 'Unable to retrieve.',
        error,
      };
    }
  }

  static update(): IHttpResponse {
    try {
      const records: unknown[] = [];
      return {
        ...HTTP_RESPONSES[HttpResponseType.Updated],
        message: 'The record was updated successfully.',
        records,
      };
    } catch (error) {
      return {
        ...HTTP_RESPONSES[HttpResponseType.BadRequest],
        message: 'Unable to update.',
        error,
      };
    }
  }

  static delete(): IHttpResponse {
    try {
      const records: unknown[] = [];
      return {
        ...HTTP_RESPONSES[HttpResponseType.Deleted],
        message: 'The record was deleted successfully.',
        records,
      };
    } catch (error) {
      return {
        ...HTTP_RESPONSES[HttpResponseType.BadRequest],
        message: 'Unable to delete.',
        error,
      };
    }
  }

  static archive(): IHttpResponse {
    try {
      const records: unknown[] = [];
      return {
        ...HTTP_RESPONSES[HttpResponseType.Archived],
        message: 'The record was archived successfully.',
        records,
      };
    } catch (error) {
      return {
        ...HTTP_RESPONSES[HttpResponseType.BadRequest],
        message: 'Unable to archive.',
        error,
      };
    }
  }

  static restore(): IHttpResponse {
    try {
      const records: unknown[] = [];
      return {
        ...HTTP_RESPONSES[HttpResponseType.Restored],
        message: 'The record was restored successfully.',
        records,
      };
    } catch (error) {
      return {
        ...HTTP_RESPONSES[HttpResponseType.BadRequest],
        message: 'Unable to restore.',
        error,
      };
    }
  }
}

export default TestService;
