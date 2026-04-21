import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(loginDto: LoginDto) {
    const _user = await this.usersService.findOne(loginDto.username);

    if (loginDto.password === _user.password) {
      return _user;
    }
    return null;
  }

  login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

  register(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
