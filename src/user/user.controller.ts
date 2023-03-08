import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './entities/user.entity';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Post()
  async create(@Body() user: User) {
    const createUser = await this.userService.createUser(user);
    return { createUser };
  }
}
