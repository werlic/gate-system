import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async login(dto: LoginDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: dto.email
      }
    })
    if (!user) {
      throw new BadRequestException("User email does not exist!!")
    }
    if (await this.checkPassword(dto.password, user.password)) {
      return user
    }
    // throw new UnauthorizedException("User or email does not match!")
    return null
  }

  checkPassword(password: string, originPassword: string) {
    return bcrypt.compare(password, originPassword); 
  }
}
