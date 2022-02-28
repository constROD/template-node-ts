export interface ITestRetrieveRequest {
  id?: string;
  name?: string;
}

export interface ITestCreateRequest {
  name: string;
}

export interface ITestUpdateRequest {
  id: string;
  name?: string;
}
