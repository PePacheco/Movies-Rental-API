import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm';

@Entity('movies')
class Movie {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    name: string;

    @Column()
    director: string;

    @Column()
    rented: number;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Movie;