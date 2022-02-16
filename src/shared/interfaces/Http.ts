/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from 'axios';

export interface IHttpResponse<R = undefined> {
  message: string;
  statusCode: number;
  code: number;
  records?: R;
  error?: any;
}

export type IHttpRequest = {
  params?: any;
  body?: any;
} & AxiosRequestConfig;

export interface IHttpOptions {
  isPublic?: boolean;
}
