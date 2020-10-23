import ICreateMovieDTO from "../dtos/ICreateMovieDTO";
import Movie from "../infra/typeorm/entities/Movie";

export default interface IMoviesRepository {
    create(data: ICreateMovieDTO): Promise<Movie>;
    findByName(name: string): Promise<Movie | undefined>;
    findAll(): Promise<Movie[]>;
}