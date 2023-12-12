import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ranking {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    idPlayer: number;

}
