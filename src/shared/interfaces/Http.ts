import { IKeyValue } from './Common';

import { AxiosRequestConfig } from 'axios';

export interface IHttpResponse<R = unknown> {
  message: string;
  error?: unknown;
  statusCode: number;
  code: number;
  records?: R;
}

export type IHttpRequest<P = IKeyValue, B = IKeyValue> = {
  params?: P;
  body?: B;
} & AxiosRequestConfig;

export interface IHttpOptions {
  isPublic?: boolean;
}
