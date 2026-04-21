import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
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

  async create(
    createUserDto: CreateUserDto,
  ): Promise<{ message: string; username: string }> {
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      parseInt(<string>this.configService.get('BCRYPT_SALT_ROUNDS')) ?? 10,
    );
    const _userSave = await this.userRepository.save(createUserDto);

    if (!_userSave) {
      throw new InternalServerErrorException('');
    }

    return { message: 'User created!', username: _userSave.username };
  }
}
