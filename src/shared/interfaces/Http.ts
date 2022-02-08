export interface IHttpResponse {
  message: string;
  error?: unknown;
  statusCode: number;
  code: number;
  results?: unknown;
}

export interface IHttpRequest {
  url: string;
  headers?: { [key: string]: unknown };
  params?: { [key: string]: unknown };
}

export interface IHttpOptions {
  isPublic?: boolean;
}

export type IHttpGETRequest = IHttpRequest;

export interface IHttpPOSTRequest extends IHttpRequest {
  body?: { [key: string]: unknown };
}

export type IHttpPUTRequest = IHttpPOSTRequest;

export type IHttpDELETERequest = IHttpGETRequest;
