import TestRouter from './Test';

import CommonUtil from '../shared/utils/Common';

export const rootRoutes = {
  tests: CommonUtil.createRoute('/tests', TestRouter),
};
