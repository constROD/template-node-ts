import CommonService from './Common';

import { Tables } from '../constants/Tables';
import {
  ITestCreateRequest,
  ITestEntity,
  ITestRetrieveRequest,
  ITestUpdateRequest,
} from '../interfaces/Test';
import QueryUtil from '../utils/Query';

const TestsTableName = QueryUtil.generateSchemaAndTableName(Tables.Tests);

class TestService extends CommonService<
  ITestEntity,
  ITestRetrieveRequest,
  ITestCreateRequest,
  ITestUpdateRequest
> {
  constructor() {
    super({
      tableName: Tables.Tests,
      tableNameAlias: TestsTableName,
    });
  }
}

export default new TestService();
