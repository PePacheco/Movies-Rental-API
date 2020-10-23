import ICreateMovieDTO from "../dtos/ICreateMovieDTO";
import Movie from "../infra/typeorm/entities/Movie";

export default interface IMoviesRepository {
    create(data: ICreateMovieDTO): Promise<Movie>;
    findByNameAndRented(name: string, rented: number): Promise<Movie | undefined>;
    findAll(): Promise<Movie[]>;
    rent(movie: Movie): Promise<void>;
    returnMovie(movie: Movie): Promise<void>;
}