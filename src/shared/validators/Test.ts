/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ITestCreateRequest, ITestRetrieveRequest, ITestUpdateRequest } from '../interfaces/Test';
import { IValidatorError, IValidatorResponse } from '../interfaces/Validator';

import * as yup from 'yup';

export const testRetrieveValidator = (
  values: ITestRetrieveRequest
): Promise<IValidatorResponse<ITestRetrieveRequest>> =>
  new Promise(resolve => {
    const schema = yup.object().shape({
      id: yup.string().optional(),
      name: yup.string().min(6, 'Name must be atleast 6 characters.').optional(),
    });

    schema
      .validate(values, { abortEarly: false, stripUnknown: true })
      .then(data => {
        const sanitizeData = data as ITestRetrieveRequest;
        resolve({ data: sanitizeData, error: undefined });
      })
      .catch(err => {
        const error = err.inner.map((e: { path: string; message: string }) => ({
          id: e.path,
          message: e.message,
        })) as IValidatorError[];
        resolve({ data: undefined, error });
      });
  });

export const testCreateValidator = (
  values: ITestCreateRequest
): Promise<IValidatorResponse<ITestCreateRequest>> =>
  new Promise(resolve => {
    const schema = yup.object().shape({
      name: yup.string().min(6, 'Name must be atleast 6 characters.').required(),
    });

    schema
      .validate(values, { abortEarly: false, stripUnknown: true })
      .then(data => {
        const sanitizeData = data as ITestCreateRequest;
        resolve({ data: sanitizeData, error: undefined });
      })
      .catch(err => {
        const error = err.inner.map((e: { path: string; message: string }) => ({
          id: e.path,
          message: e.message,
        })) as IValidatorError[];
        resolve({ data: undefined, error });
      });
  });

export const testUpdateValidator = (
  values: ITestUpdateRequest
): Promise<IValidatorResponse<ITestUpdateRequest>> =>
  new Promise(resolve => {
    const schema = yup.object().shape({
      id: yup.string().required('id is required.'),
      name: yup.string().min(6, 'Name must be atleast 6 characters.').optional(),
    });

    schema
      .validate(values, { abortEarly: false, stripUnknown: true })
      .then(data => {
        const sanitizeData = data as ITestUpdateRequest;
        resolve({ data: sanitizeData, error: undefined });
      })
      .catch(err => {
        const error = err.inner.map((e: { path: string; message: string }) => ({
          id: e.path,
          message: e.message,
        })) as IValidatorError[];
        resolve({ data: undefined, error });
      });
  });
