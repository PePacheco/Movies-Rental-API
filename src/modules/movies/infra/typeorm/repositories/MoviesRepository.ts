import { getRepository, Repository } from 'typeorm';
import Movie from '../entities/Movie';
import IMoviesRepository from '../../../repositories/IMoviesRepository';
import ICreateMovieDTO from '../../../dtos/ICreateMovieDTO';

class UsersRepository implements IMoviesRepository {
    private ormRepository: Repository<Movie>;

    constructor() {
        this.ormRepository = getRepository(Movie);
    }

    public async create(userData: ICreateMovieDTO): Promise<Movie> {
        const user = this.ormRepository.create(userData);
        await this.ormRepository.save(user);
        return user;
    }

    public async findByName(name: string): Promise<Movie| undefined> {
        const user = this.ormRepository.findOne({
            where: { name }
        });
        return user;
    }

    public async findAll(): Promise<Movie[]> {
        const user = this.ormRepository.find();
        return user;
    }
}

export default UsersRepository;