/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from 'axios';

export interface IHttpResponse<R = unknown> {
  message: string;
  statusCode: number;
  code: number;
  records?: R;
  error?: Error;
}

export type IHttpRequest = {
  params?: any;
  body?: any;
} & AxiosRequestConfig;

export interface IHttpOptions {
  isPublic?: boolean;
}
