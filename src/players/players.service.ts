import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';
import { Role } from '../common/enums/role.enum';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}
  async create(createPlayerDto: CreatePlayerDto) {
    const player = this.playerRepository.create(createPlayerDto);
    if (!player.role) {
      player.role = [Role.PLAYER];
    }
    return await this.playerRepository.save(player);
  }

  async findOneByEmail(email: string) {
    return this.playerRepository.findOneBy({ email });
  }

  async findByEmailWithPassword(email: string) {
    return this.playerRepository.findOne({
      where: { email },
      select: ['id', 'name', 'email', 'password', 'role'],
    });
  }

  async findAll() {
    return await this.playerRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    await this.findOne(id);

    return await this.playerRepository.update(id, {
      ...updatePlayerDto,
    });
  }

  async remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
