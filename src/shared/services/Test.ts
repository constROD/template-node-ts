import { HTTP_RESPONSES, HttpResponseType } from '../constants/Http';
import { IHttpResponse } from '../interfaces/Http';
import { ITestCreateRequest, ITestRetrieveRequest, ITestUpdateRequest } from '../interfaces/Test';
import CommonUtil from '../utils/Common';

import { basename } from 'path';

const PATH = `shared/${basename(__dirname)}/${basename(__filename)}`;

class TestService {
  static create(request: ITestCreateRequest): IHttpResponse {
    try {
      const records: unknown[] = [request];
      return {
        ...HTTP_RESPONSES[HttpResponseType.Created],
        message: 'The record(s) was created successfully.',
        records,
      };
    } catch (error) {
      CommonUtil.logger({
        path: PATH,
        event: 'create',
        log: error,
      });
      return {
        ...HTTP_RESPONSES[HttpResponseType.BadRequest],
        message: 'Unable to create.',
        error,
      };
    }
  }

  static retrieve(request: ITestRetrieveRequest): IHttpResponse {
    try {
      const records: unknown[] = [request];
      return {
        ...HTTP_RESPONSES[HttpResponseType.Success],
        message: 'The record(s) was retrieved successfully.',
        records,
      };
    } catch (error) {
      CommonUtil.logger({
        path: PATH,
        event: 'retrieve',
        log: error,
      });
      return {
        ...HTTP_RESPONSES[HttpResponseType.BadRequest],
        message: 'Unable to retrieve.',
        error,
      };
    }
  }

  static update(request: ITestUpdateRequest): IHttpResponse {
    try {
      const records: unknown[] = [request];
      return {
        ...HTTP_RESPONSES[HttpResponseType.Updated],
        message: 'The record(s) was updated successfully.',
        records,
      };
    } catch (error) {
      CommonUtil.logger({
        path: PATH,
        event: 'update',
        log: error,
      });
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
        message: 'The record(s) was deleted successfully.',
        records,
      };
    } catch (error) {
      CommonUtil.logger({
        path: PATH,
        event: 'delete',
        log: error,
      });
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
        message: 'The record(s) was archived successfully.',
        records,
      };
    } catch (error) {
      CommonUtil.logger({
        path: PATH,
        event: 'archive',
        log: error,
      });
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
        message: 'The record(s) was restored successfully.',
        records,
      };
    } catch (error) {
      CommonUtil.logger({
        path: PATH,
        event: 'restore',
        log: error,
      });
      return {
        ...HTTP_RESPONSES[HttpResponseType.BadRequest],
        message: 'Unable to restore.',
        error,
      };
    }
  }
}

export default TestService;
