export interface ICommon extends ICommonCreate, ICommonUpdate, ICommonArchive {
  id: string;
}

export interface ICommonCreate {
  createdById: string;
  createdAt: Date | string;
}

export interface ICommonUpdate {
  updatedById: string;
  updatedAt: Date | string;
}

export interface ICommonArchive {
  deletedById: string;
  deletedAt: Date | string;
}

export interface ICommonRestore {
  updatedById: string;
  updatedAt: Date | string;
}
