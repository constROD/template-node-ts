export interface IValidatorError {
  id: string;
  message: string;
}

export interface IValidatorResponse<T = undefined> {
  data?: T;
  error?: IValidatorError[];
}
