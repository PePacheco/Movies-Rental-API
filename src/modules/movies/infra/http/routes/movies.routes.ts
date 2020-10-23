import { Router } from 'express';

import MoviesController from '../controllers/MoviesController';

const routes = Router();
const moviesController = new MoviesController();

routes.get('/:name', moviesController.show);

routes.get('/', moviesController.index);

routes.post('/', moviesController.create);

export default routes;