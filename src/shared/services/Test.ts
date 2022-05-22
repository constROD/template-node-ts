import CommonService from './Common';

import { Tables } from '../constants/Tables';
import { ITestEntity } from '../interfaces/Test';
import QueryUtil from '../utils/Query';

const TestsTableName = QueryUtil.generateSchemaAndTableName(Tables.Tests);

class TestService extends CommonService<ITestEntity> {
  constructor() {
    super({
      tableName: Tables.Tests,
      tableNameAlias: TestsTableName,
    });
  }
}

export default new TestService();
