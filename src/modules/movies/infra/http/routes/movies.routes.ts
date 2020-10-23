import { Router } from 'express';

import RentMovieController from '../controllers/RentMoviesController';
import ReturnMovieController from '../controllers/ReturnMovieController';
import MoviesController from '../controllers/MoviesController';
import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const routes = Router();
const moviesController = new MoviesController();
const rentMoviesController = new RentMovieController();
const returnMoviesController = new ReturnMovieController();

routes.use(ensureAuthenticated);

routes.get('/:name', moviesController.show);

routes.get('/', moviesController.index);

routes.post('/', moviesController.create);

routes.patch('/:name/rent', rentMoviesController.update);

routes.patch('/:name/return', returnMoviesController.update);

export default routes;