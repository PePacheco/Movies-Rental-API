import { Request, Response } from 'express';

import CreateMovieService from '../../../services/CreateMovieService';
import GetMoviesByNameService from '../../../services/GetMoviesByNameService';
import GetAllMoviesService from '../../../services/GetAllMoviesService';

class MoviesController {
    public async show(request: Request, response: Response): Promise<Response> {
        const getMovieByName = new GetMoviesByNameService();

        const movie = await getMovieByName.execute(request.params.name);
        
        return response.json(movie);
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const getAllMovies = new GetAllMoviesService();

        const movie = await getAllMovies.execute(request.params.name);
        
        return response.json(movie);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, director } = request.body;

        const createMovie = new CreateMovieService();

        const movie = await createMovie.execute({
            name,
            director,
        });
        
        return response.json(movie);
    }
}

export default MoviesController;