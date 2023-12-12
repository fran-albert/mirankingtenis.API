import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PlayersService } from 'src/players/players.service';
import * as bcryptjs from 'bcryptjs';
import { RegisterDto } from './dto/register.dto';
import { Role } from 'src/common/enums/role.enum';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly playersService: PlayersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const playerExists = await this.playersService.findOneByEmail(
      registerDto.email,
    );

    if (playerExists) {
      throw new BadRequestException('Player already exists');
    }

    const newPlayer = {
      ...registerDto,
      password: await bcryptjs.hash(registerDto.password, 10),
      city: { id: registerDto.idCity },
      role: [Role.PLAYER],
    };

    await this.playersService.create(newPlayer);

    return {
      message: 'User created successfully',
    };
  }

  async login(loginDto: LoginDto) {
    const player = await this.playersService.findByEmailWithPassword(
      loginDto.email,
    );
    if (!player) {
      throw new UnauthorizedException('Email is wrong');
    }

    const isPasswordValid = await bcryptjs.compare(
      loginDto.password,
      player.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Password is wrong');
    }

    const payload = { email: player.email, roles: player.role };
    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      email: player.email,
    };
  }
}
