import { IsEmail } from 'class-validator';
import {
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator/types/decorator/decorators';
import { User } from '../entities/user.entity';

export class CreateUserDto {
  userEntity: User;

  constructor() {}

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  name: string;
}
