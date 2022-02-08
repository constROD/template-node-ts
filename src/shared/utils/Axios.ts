/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { XHeader, HTTP_RESPONSES, HttpResponseType, Code } from '../constants/Http';
import {
  IHttpResponse,
  IHttpGETRequest,
  IHttpOptions,
  IHttpPOSTRequest,
  IHttpPUTRequest,
  IHttpDELETERequest,
} from '../interfaces/Http';

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const PrivateInstance = axios.create();
const PublicInstance = axios.create();

PrivateInstance.interceptors.request.use(config => {
  if (config.headers) {
    config.headers[XHeader.IdToken] = '';
    config.headers[XHeader.AccessToken] = '';
  }
  return config;
});

PrivateInstance.interceptors.response.use(
  res => res,
  err => {
    const error = err as AxiosError;
    if (!error.response) {
      return Promise.reject({
        ...error,
        data: {
          ...HTTP_RESPONSES[HttpResponseType.ServerError],
          message: `Can't connect to the server. Please try again later.`,
          error,
        },
      });
    }

    if (error.response.data.code === Code.Unauthorized) {
      // do something
    }
    return Promise.reject(error.response);
  }
);

PublicInstance.interceptors.response.use(
  res => res,
  error => {
    if (!error.response) {
      return Promise.reject({
        ...error,
        data: {
          ...HTTP_RESPONSES[HttpResponseType.ServerError],
          message: `Can't connect to the server. Please try again later.`,
          error,
        },
      });
    }

    return Promise.reject(error.response);
  }
);

class AxiosUtil {
  static async GET<R = IHttpResponse>(
    request: IHttpGETRequest,
    options: IHttpOptions = { isPublic: false }
  ): Promise<AxiosResponse<R>> {
    try {
      const { isPublic } = options;
      const instance = isPublic ? PublicInstance : PrivateInstance;
      const data = await instance({ method: 'GET', ...request } as AxiosRequestConfig);
      return data;
    } catch (err) {
      const error = err as AxiosResponse<R>;
      return error;
    }
  }

  static async POST<R = IHttpResponse>(
    request: IHttpPOSTRequest,
    options: IHttpOptions = { isPublic: false }
  ): Promise<AxiosResponse<R>> {
    try {
      const { isPublic } = options;
      const instance = isPublic ? PublicInstance : PrivateInstance;
      const data = await instance({
        method: 'POST',
        ...request,
        data: request.body,
      } as AxiosRequestConfig);
      return data;
    } catch (err) {
      const error = err as AxiosResponse<R>;
      return error;
    }
  }

  static async PUT<R = IHttpResponse>(
    request: IHttpPUTRequest,
    options: IHttpOptions = { isPublic: false }
  ): Promise<AxiosResponse<R>> {
    try {
      const { isPublic } = options;
      const instance = isPublic ? PublicInstance : PrivateInstance;
      const data = await instance({
        method: 'PUT',
        ...request,
        data: request.body,
      } as AxiosRequestConfig);
      return data;
    } catch (err) {
      const error = err as AxiosResponse<R>;
      return error;
    }
  }

  static async DELETE<R = IHttpResponse>(
    request: IHttpDELETERequest,
    options: IHttpOptions = { isPublic: false }
  ): Promise<AxiosResponse<R>> {
    try {
      const { isPublic } = options;
      const instance = isPublic ? PublicInstance : PrivateInstance;
      const data = await instance({ method: 'DELETE', ...request } as AxiosRequestConfig);
      return data;
    } catch (err) {
      const error = err as AxiosResponse<R>;
      return error;
    }
  }
}

export default AxiosUtil;
