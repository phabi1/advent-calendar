import { Injectable } from '@nestjs/common';
import { CreateGameDto } from '../../dto/create-game.dto';
import { UpdateGameDto } from '../../dto/update-game.dto';
import { Game } from '../../entities/game.entity';

@Injectable()
export class GameService {
  async count(): Promise<number> {
    return 0;
  }
  create(createGameDto: CreateGameDto) {
    return 'This action adds a new game';
  }

  async findAll(): Promise<Game[]> {
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
