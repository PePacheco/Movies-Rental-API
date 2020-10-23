
import Movie from '../infra/typeorm/entities/Movie';
import IMoviesRepository from '../repositories/IMoviesRepository';
import MoviesRepository from '../infra/typeorm/repositories/MoviesRepository';


class GetAllMoviesService {
    private moviesRepository: IMoviesRepository;
    constructor() {
        this.moviesRepository = new MoviesRepository()
    }
    
    public async execute(name: string): Promise<Movie[]> {
        const user = await this.moviesRepository.findAll();

        return user;
    }   
}

export default GetAllMoviesService;