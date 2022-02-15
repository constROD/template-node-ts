export interface IParameterCreate {
  queryParams: string[];
  columns: string[];
  values: unknown[];
}

export interface IParameterUpdate {
  columns: string;
  values: unknown[];
}
