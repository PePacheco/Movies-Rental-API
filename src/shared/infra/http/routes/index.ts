import { Router } from 'express';
import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';
import moviesRouter from '../../../../modules/movies/infra/http/routes/movies.routes';
import sessionsRouter from '../../../../modules/users/infra/http/routes/session.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/movies', moviesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;