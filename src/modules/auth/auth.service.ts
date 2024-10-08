import { Injectable } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { CreateAuthDto } from './dto/req/create-auth.dto';
import { UpdateAuthDto } from './dto/req/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  create(_: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, _: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
