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
import { Category } from 'src/categories/entities/category.entity';

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

  @ManyToOne(() => Category, (category) => category.players, {
    nullable: false,
  })
  @JoinColumn({ name: 'idCategory' })
  category: Category;

  @Column('simple-array')
  role: Role[];

  @DeleteDateColumn()
  deletedAt: Date;
}
