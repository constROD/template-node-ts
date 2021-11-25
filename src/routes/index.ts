import CommonUtil from '../shared/utils/Common';
import TestRouter from './Test';

const rootRoutes = {
  tests: CommonUtil.createRoute('/v1', TestRouter),
};

export default rootRoutes;
