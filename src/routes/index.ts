import TestRouter from './Test';

import CommonUtil from '../shared/utils/Common';

const rootRoutes = {
  tests: CommonUtil.createRoute('/v1', TestRouter),
};

export default rootRoutes;
