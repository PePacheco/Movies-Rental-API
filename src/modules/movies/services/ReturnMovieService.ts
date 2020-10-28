
import Movie from '../infra/typeorm/entities/Movie';
import IMoviesRepository from '../repositories/IMoviesRepository';
import MoviesRepository from '../infra/typeorm/repositories/MoviesRepository';
import AppError from '../../../shared/errors/AppError';


class RentMovieService {
    private moviesRepository: IMoviesRepository;
    constructor() {
        this.moviesRepository = new MoviesRepository()
    }
    
    public async execute(name: string, user_id: string): Promise<Movie> {
        const movie = await this.moviesRepository.findUserRented(name, user_id);
        if(!movie) {
            throw new AppError('Movie not found or not rented for this user', 404);
        }
        this.moviesRepository.returnMovie(movie);
        return movie;
    }   
}

export default RentMovieService;