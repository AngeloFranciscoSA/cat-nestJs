import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async _findOneOrFail(username: string) {
    const _user = await this.userRepository.findOne({ where: { username } });
    if (!_user) {
      throw new NotFoundException(`User with id ${username} not found`);
    }
    return _user;
  }

  async findOne(username: string): Promise<User> {
    return this._findOneOrFail(username);
  }

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    await this.userRepository.save(createUserDto);
    return createUserDto;
  }
}
