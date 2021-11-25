export interface IHttpResponse {
  message: string
  error?: any
  statusCode: number
  code: number
  results?: any
}

export interface IHttpRequest {
  url: string
  headers?: { [key: string]: any }
}

export interface IHttpGETRequest extends IHttpRequest {
  params?: { [key: string]: any }
}

export interface IHttpPOSTRequest extends IHttpRequest {
  body?: { [key: string]: any }
}

export interface IHttpPUTRequest extends IHttpPOSTRequest { }

export interface IHttpDELETERequest extends IHttpGETRequest { }
