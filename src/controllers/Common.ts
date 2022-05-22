import { HttpResponseType, HTTP_RESPONSES } from '../shared/constants/Http';
import { IHttpResponse } from '../shared/interfaces/Http';
import { IValidatorResponse } from '../shared/interfaces/Validator';
import CommonService from '../shared/services/Common';

import { Request, Response } from 'express';

type IValidator<T> = (values: T) => Promise<IValidatorResponse<T>>;

interface IValidators<R, C, U> {
  retrieve?: IValidator<R>;
  create?: IValidator<C>;
  update?: IValidator<U>;
}

interface ICommonConstructor<T, R, C, U> {
  service: CommonService<T, R, C, U>;
  validators: IValidators<R, C, U>;
}

class CommonController<EntityType, R = any, C = any, U = any> {
  private service: CommonService<EntityType, R, C, U>;

  private validators: IValidators<R, C, U>;

  constructor({ service, validators = {} }: ICommonConstructor<EntityType, R, C, U>) {
    this.service = service;
    this.validators = validators;
  }

  protected async validate<T>({ values, validator }: { values: T; validator?: IValidator<T> }) {
    let validatedData;
    let validationError;

    if (validator) {
      const { data, error } = await validator(values);
      if (data) validatedData = data;
      if (error) validationError = error;
    }

    return { data: validatedData, error: validationError };
  }

  protected sendBadRequest(res: Response, error?: unknown) {
    const response = {
      ...HTTP_RESPONSES[HttpResponseType.BadRequest],
      error,
    };

    res.status(response.statusCode).json(response);
  }

  async retrieve(req: Request, res: Response) {
    const { data: filters, error: validationError } = await this.validate<R>({
      values: req.query as any as R,
      validator: this.validators.retrieve,
    });

    if (validationError) {
      this.sendBadRequest(res, validationError);
      return;
    }

    try {
      const records = await this.service.retrieve(filters);
      const response: IHttpResponse<EntityType[]> = {
        ...HTTP_RESPONSES[HttpResponseType.Success],
        records,
      };
      res.status(response.statusCode).json(response);
    } catch (error) {
      const response = { ...HTTP_RESPONSES[HttpResponseType.ServerError], error };
      res.status(response.statusCode).json(response);
    }
  }

  async create(req: Request, res: Response) {
    const { data, error: validationError } = await this.validate<C>({
      values: req.body as C,
      validator: this.validators.create,
    });

    if (validationError) {
      this.sendBadRequest(res, validationError);
      return;
    }

    try {
      const records = await this.service.create(data);
      const response: IHttpResponse<EntityType[]> = {
        ...HTTP_RESPONSES[HttpResponseType.Created],
        records,
      };
      res.status(response.statusCode).json(response);
    } catch (error) {
      const response = { ...HTTP_RESPONSES[HttpResponseType.ServerError], error };
      res.status(response.statusCode).json(response);
    }
  }

  async update(req: Request, res: Response) {
    const id = req.query.id as string;
    const { data, error: validationError } = await this.validate({
      values: req.body as U,
      validator: this.validators.update,
    });

    if (validationError || !id) {
      this.sendBadRequest(res, validationError || [{ id: 'id', message: 'id is required' }]);
      return;
    }

    try {
      const records = await this.service.update({ data, filters: { id } });
      const response: IHttpResponse<EntityType[]> = {
        ...HTTP_RESPONSES[HttpResponseType.Updated],
        records,
      };
      res.status(response.statusCode).json(response);
    } catch (error) {
      const response = { ...HTTP_RESPONSES[HttpResponseType.ServerError], error };
      res.status(response.statusCode).json(response);
    }
  }

  async delete(req: Request, res: Response) {
    const id = req.query.id as string;

    if (!id) {
      this.sendBadRequest(res, [{ id: 'id', message: 'id is required' }]);
      return;
    }

    try {
      const records = await this.service.delete(id);
      const response: IHttpResponse<EntityType[]> = {
        ...HTTP_RESPONSES[HttpResponseType.Deleted],
        records,
      };
      res.status(response.statusCode).json(response);
    } catch (error) {
      const response = { ...HTTP_RESPONSES[HttpResponseType.ServerError], error };
      res.status(response.statusCode).json(response);
    }
  }
}

export default CommonController;
