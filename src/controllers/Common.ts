import { HttpResponseType, HTTP_RESPONSES } from '../shared/constants/Http';
import { IHttpResponse } from '../shared/interfaces/Http';
import { IValidatorResponse } from '../shared/interfaces/Validator';
import CommonService from '../shared/services/Common';

import { Request, Response } from 'express';

type IValidator<T> = (values: T) => Promise<IValidatorResponse<T>>;

interface IValidators<RetrieveType, CreateType, UpdateType> {
  retrieve?: IValidator<RetrieveType>;
  create?: IValidator<CreateType>;
  update?: IValidator<UpdateType>;
}

interface ICommonConstructor<T, RetrieveType, CreateType, UpdateType> {
  service: CommonService<T, RetrieveType, CreateType, UpdateType>;
  validators: IValidators<RetrieveType, CreateType, UpdateType>;
}

class CommonController<EntityType, RetrieveType = any, CreateType = any, UpdateType = any> {
  private service: CommonService<EntityType, RetrieveType, CreateType, UpdateType>;

  private validators: IValidators<RetrieveType, CreateType, UpdateType>;

  constructor({
    service,
    validators = {},
  }: ICommonConstructor<EntityType, RetrieveType, CreateType, UpdateType>) {
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
    const { data: filters, error: validationError } = await this.validate<RetrieveType>({
      values: req.query as any as RetrieveType,
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
    const { data, error: validationError } = await this.validate<CreateType>({
      values: req.body as CreateType,
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
      values: req.body as UpdateType,
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
