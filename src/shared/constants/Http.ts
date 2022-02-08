/* 
  Code Scheme
  0 - Sever Error
  1 - Success
  2 - Created
  3 - Updated
  4 - Archived
  5 - Deleted
  6 - Restored
  7 - Bad Request
  8 - Unauthorized
  9 - Conflict
  10 - Conflict
*/

export enum Code {
  ServerError = 0,
  Success = 1,
  Created = 2,
  Updated = 3,
  Archived = 4,
  Deleted = 5,
  Restored = 6,
  BadRequest = 7,
  Unauthorized = 8,
  Conflict = 9,
  NotFound = 10,
}

export enum HttpResponseType {
  ServerError = 'serverError',
  Success = 'success',
  Created = 'created',
  Updated = 'updated',
  Archived = 'archived',
  Deleted = 'deleted',
  Restored = 'restored',
  BadRequest = 'badRequest',
  Unauthorized = 'unauthorized',
  Conflict = 'conflict',
  NotFound = 'notFound',
}

export enum XHeader {
  IdToken = 'X-ID-TOKEN',
  AccessToken = 'X-ACCESS-TOKEN',
}

export const HTTP_RESPONSES = {
  serverError: {
    message: 'Server Error',
    statusCode: 500,
    code: 0,
  },
  success: {
    message: 'Success',
    statusCode: 200,
    code: 1,
  },
  created: {
    message: 'Created',
    statusCode: 201,
    code: 2,
  },
  updated: {
    message: 'Updated',
    statusCode: 200,
    code: 3,
  },
  archived: {
    message: 'Archived',
    statusCode: 200,
    code: 4,
  },
  deleted: {
    message: 'Deleted',
    statusCode: 200,
    code: 5,
  },
  restored: {
    message: 'Restored',
    statusCode: 200,
    code: 6,
  },
  badRequest: {
    message: 'Bad Request',
    statusCode: 400,
    code: 7,
  },
  unauthorized: {
    message: 'Unauthorized',
    statusCode: 401,
    code: 8,
  },
  conflict: {
    message: 'Conflict',
    statusCode: 409,
    code: 9,
  },
  notFound: {
    message: 'Not Found',
    statusCode: 404,
    code: 10,
  },
};
