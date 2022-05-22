import TestController from '../controllers/Test';

import { Router as useRouter } from 'express';

const Router: useRouter = useRouter();

/* Routes */
Router.get('/', (req, res) => TestController.retrieve(req, res));
Router.post('/', (req, res) => TestController.create(req, res));
Router.put('/', (req, res) => TestController.update(req, res));
Router.delete('/', (req, res) => TestController.delete(req, res));

export default Router;
