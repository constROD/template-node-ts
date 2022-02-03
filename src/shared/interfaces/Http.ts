export interface IHttpResponse {
  message: string;
  error?: unknown;
  statusCode: number;
  code: number;
  records?: unknown[];
}

export interface IHttpRequest {
  url: string;
  headers?: { [key: string]: unknown };
}

export interface IHttpGETRequest extends IHttpRequest {
  params?: { [key: string]: unknown };
}

export interface IHttpPOSTRequest extends IHttpRequest {
  body?: { [key: string]: unknown };
}

export type IHttpPUTRequest = IHttpPOSTRequest;

export type IHttpDELETERequest = IHttpGETRequest;
