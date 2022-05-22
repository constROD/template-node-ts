import { ICommon } from './Common';

export interface ITestEntity extends ICommon {
  id: string;
  name: string;
}

export interface ITestRetrieveRequest {
  id?: string;
  name?: string;
}

export interface ITestCreateRequest {
  name: string;
}

export interface ITestUpdateRequest {
  name?: string;
}

export interface ITestDeleteRequest {
  id: string;
}
