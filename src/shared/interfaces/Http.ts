/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from 'axios';

export interface IHttpResponse<R = unknown> {
  message: string;
  error?: unknown;
  statusCode: number;
  code: number;
  records?: R;
}

export type IHttpRequest = {
  params?: any;
  body?: any;
} & AxiosRequestConfig;

export interface IHttpOptions {
  isPublic?: boolean;
}
