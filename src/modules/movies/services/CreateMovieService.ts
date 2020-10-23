
import Movie from '../infra/typeorm/entities/Movie';
import AppError from '../../../shared/errors/AppError';
import IMoviesRepository from '../repositories/IMoviesRepository';
import MoviesRepository from '../infra/typeorm/repositories/MoviesRepository';

interface Request {
    name: string;
    director: string;
}

class CreateUserService {
    private moviesRepository: IMoviesRepository;
    constructor() {
        this.moviesRepository = new MoviesRepository()
    }
    
    public async execute({ name, director } : Request): Promise<Movie> {
        const user = await this.moviesRepository.create({
            name,
            director,
        });

        return user;
    }   
}

export default CreateUserService;