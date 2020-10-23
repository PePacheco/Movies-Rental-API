
import Movie from '../infra/typeorm/entities/Movie';
import IMoviesRepository from '../repositories/IMoviesRepository';
import MoviesRepository from '../infra/typeorm/repositories/MoviesRepository';


class GetMoviesByNameService {
    private moviesRepository: IMoviesRepository;
    constructor() {
        this.moviesRepository = new MoviesRepository()
    }
    
    public async execute(name: string): Promise<Movie | undefined> {
        const user = await this.moviesRepository.findByName(name);

        return user;
    }   
}

export default GetMoviesByNameService;