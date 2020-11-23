/* Code Scheme
  0 - Sever Error
  1 - Success
  2 - Created
  3 - Updated
  4 - Deleted
  5 - Bad Request
  6 - Unauthorized
*/

export enum HttpResponseType {
  ServerError = "server_error",
  Success = "success",
  Created = "created",
  Updated = "updated",
  Deleted = "deleted",
  BadRequest = "bad_request",
  Unauthorized = "unauthorized",
}

export const HTTP_RESPONSES = {
  server_error: {
    message: "Server Error",
    statusCode: 500,
    code: 0,
  },
  success: {
    message: "Success",
    statusCode: 200,
    code: 1,
  },
  created: {
    message: "Created",
    statusCode: 201,
    code: 2,
  },
  updated: {
    message: "Updated",
    statusCode: 200,
    code: 3,
  },
  deleted: {
    message: "Updated",
    statusCode: 200,
    code: 4,
  },
  bad_request: {
    message: "Bad Request",
    statusCode: 400,
    code: 5,
  },
  unauthorized: {
    message: "Unauthorized",
    statusCode: 401,
    code: 6,
  },
};
