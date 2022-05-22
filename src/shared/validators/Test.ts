import { ITestCreateRequest, ITestRetrieveRequest, ITestUpdateRequest } from '../interfaces/Test';
import { IValidatorError, IValidatorResponse } from '../interfaces/Validator';

import * as yup from 'yup';

const validate = <T>(schema: yup.ObjectSchema<any>, values: T): Promise<IValidatorResponse<T>> =>
  new Promise(resolve => {
    schema
      .validate(values, { abortEarly: false, stripUnknown: true })
      .then(data => {
        const sanitizedData = Object.keys(data).length !== 0 ? (data as T) : undefined;
        resolve({ data: sanitizedData, error: undefined });
      })
      .catch(err => {
        const error = err.inner.map((e: { path: string; message: string }) => ({
          id: e.path,
          message: e.message,
        })) as IValidatorError[];
        resolve({ data: undefined, error });
      });
  });

export const testRetrieveValidator = (
  values: ITestRetrieveRequest
): Promise<IValidatorResponse<ITestRetrieveRequest>> => {
  const schema = yup.object().shape({
    id: yup.string().optional(),
    name: yup.string().min(6, 'Name must be atleast 6 characters.').optional(),
  });

  return validate<ITestRetrieveRequest>(schema, values);
};

export const testCreateValidator = (
  values: ITestCreateRequest
): Promise<IValidatorResponse<ITestCreateRequest>> => {
  const schema = yup.object().shape({
    name: yup.string().min(6, 'Name must be atleast 6 characters.').required(),
  });

  return validate<ITestCreateRequest>(schema, values);
};

export const testUpdateValidator = (
  values: ITestUpdateRequest
): Promise<IValidatorResponse<ITestUpdateRequest>> => {
  const schema = yup.object().shape({
    name: yup.string().min(6, 'Name must be atleast 6 characters.').optional(),
  });

  return validate<ITestUpdateRequest>(schema, values);
};
