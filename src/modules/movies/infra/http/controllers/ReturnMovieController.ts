import { Request, Response } from 'express';

import ReturnMovieService from '../../../services/ReturnMovieService';

class ReturnMovieController {
    public async update(request: Request, response: Response): Promise<Response> {
        const returnMovieService = new ReturnMovieService();
        const movie = await returnMovieService.execute(request.body.name, request.user.id);
        return response.json(movie);
    }
}

export default ReturnMovieController;