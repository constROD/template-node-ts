import TestController from '../controllers/Test';

import { Router as useRouter } from 'express';

const Router: useRouter = useRouter();

/* Routes */
Router.post('/', TestController.create);
Router.get('/', TestController.retrieve);
Router.put('/', TestController.update);
Router.delete('/', TestController.delete);
Router.delete('/archive', TestController.archive);
Router.put('/restore', TestController.restore);

export default Router;
