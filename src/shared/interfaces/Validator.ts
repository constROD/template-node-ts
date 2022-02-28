export interface IValidatorError {
  id: string;
  message: string;
}

export interface IValidatorResponse<T> {
  data?: T;
  error?: IValidatorError[];
}
