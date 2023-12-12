import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../../common/enums/role.enum';
import { City } from 'src/cities/entities/city.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  dni: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column()
  phone: string;

  @Column()
  gender: string;

  @ManyToOne(() => City, (city) => city.players, { nullable: false })
  @JoinColumn({ name: 'idCity' })
  city: City;

  @Column()
  photo: string;

  @Column()
  idCategory: number;

  @Column('simple-array')
  role: Role[];

  @DeleteDateColumn()
  deletedAt: Date;
}
