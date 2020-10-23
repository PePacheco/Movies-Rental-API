import { Request, Response } from 'express';

import RentMovieService from '../../../services/RentMovieService';

class RentMoviesController {
    public async update(request: Request, response: Response): Promise<Response> {
        const rentMovieService = new RentMovieService();
        const movie = await rentMovieService.execute(request.params.name);
        return response.json(movie);
    }
}

export default RentMoviesController;