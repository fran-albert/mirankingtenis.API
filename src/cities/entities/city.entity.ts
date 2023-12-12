import { Player } from 'src/players/entities/player.entity';
import { State } from 'src/states/entities/state.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idState: number;

  @Column()
  city: string;

  @OneToMany(() => Player, player => player.city)
  players: Player[];

  @ManyToOne(() => State, (state) => state.id)
  @JoinColumn({ name: 'idState' })
  state: State;
}
