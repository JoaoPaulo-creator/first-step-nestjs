import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async createUser(user: User): Promise<User> {
    const { email }: any = User;
    const findEmail = await this.prisma.user.findUnique({ where: email });

    if (findEmail) {
      throw new Error('Email already exists');
    }
    return this.prisma.user.create({ data: user });
  }
}
