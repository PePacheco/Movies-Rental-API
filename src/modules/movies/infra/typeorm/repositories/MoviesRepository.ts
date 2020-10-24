import { getRepository, Repository } from 'typeorm';
import Movie from '../entities/Movie';
import IMoviesRepository from '../../../repositories/IMoviesRepository';
import ICreateMovieDTO from '../../../dtos/ICreateMovieDTO';

class MoviesRepository implements IMoviesRepository {
    private ormRepository: Repository<Movie>;

    constructor() {
        this.ormRepository = getRepository(Movie);
    }

    public async create(movieData: ICreateMovieDTO): Promise<Movie> {
        const movie = this.ormRepository.create(movieData);
        await this.ormRepository.save(movie);
        return movie;
    }

    public async findByNameAndRented(name: string, rented: number): Promise<Movie| undefined> {
        const movie = this.ormRepository.findOne({
            where: { name, rented }
        });
        return movie;
    }

    public async findAll(): Promise<Movie[]> {
        const movie = this.ormRepository.find();
        return movie;
    }

    public async rent(movie: Movie, user_id: string): Promise<void> {
        movie.rented = 1;
        movie.user_id = user_id;
        await this.ormRepository.save(movie);
    }

    public async returnMovie(movie: Movie): Promise<void> {
        movie.rented = 0;
        movie.user_id = "0";
        await this.ormRepository.save(movie);
    }
}

export default MoviesRepository;