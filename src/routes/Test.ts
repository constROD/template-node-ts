import { Router as useRouter } from 'express';
import TestController from '../controllers/Test';

const Router: useRouter = useRouter();

/* Access Level Two */
Router.post('/', TestController.create);
Router.get('/', TestController.retrieve);

export default Router;
