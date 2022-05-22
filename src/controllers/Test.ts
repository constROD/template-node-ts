import CommonController from './Common';

import {
  ITestCreateRequest,
  ITestEntity,
  ITestRetrieveRequest,
  ITestUpdateRequest,
} from '../shared/interfaces/Test';
import TestService from '../shared/services/Test';
import {
  testCreateValidator,
  testRetrieveValidator,
  testUpdateValidator,
} from '../shared/validators/Test';

class TestController extends CommonController<
  ITestEntity,
  ITestRetrieveRequest,
  ITestCreateRequest,
  ITestUpdateRequest
> {
  constructor() {
    super({
      service: TestService,
      validators: {
        retrieve: testRetrieveValidator,
        create: testCreateValidator,
        update: testUpdateValidator,
      },
    });
  }
}

export default new TestController();
