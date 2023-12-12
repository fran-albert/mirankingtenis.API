import {
  IsEmail,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Role } from 'src/common/enums/role.enum';

export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsString()
  dni: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  phone: string;

  @IsString()
  gender: string;

  @IsInt()
  @IsPositive()
  idCity: number;

  @IsString()
  @IsOptional()
  photo?: string;

  @IsInt()
  @IsPositive()
  idCategory: number;

  role?: Role[];
}
