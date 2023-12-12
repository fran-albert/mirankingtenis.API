import { Player } from '../../players/entities/player.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => Player, (player) => player.category)
  players: Player[];
}
