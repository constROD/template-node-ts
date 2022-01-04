import TestController from '../controllers/Test';

import { Router as useRouter } from 'express';

const Router: useRouter = useRouter();

/* Access Level Two */
Router.post('/', TestController.create);
Router.get('/', TestController.retrieve);

export default Router;
