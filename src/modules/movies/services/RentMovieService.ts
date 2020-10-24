
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
        const movie = await this.moviesRepository.findByNameAndRented(name, 0);
        if(!movie) {
            throw new AppError('Movie not found or already rented', 404);
        }
        this.moviesRepository.rent(movie, user_id);
        return movie;
    }   
}

export default RentMovieService;