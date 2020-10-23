import { Router } from 'express';
import usersRoutes from '../../../../modules/users/infra/http/routes/users.routes';
import moviesRoutes from '../../../../modules/movies/infra/http/routes/movies.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/movies', moviesRoutes);

export default routes;