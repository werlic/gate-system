import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreatedResponse } from 'src/utils/response';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {}

  async login(dto: LoginDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: dto.email
      }
    })

    if (!user) {
      throw new BadRequestException("User not found!!")
    }

    if (user.validate(dto.password)) {
      const token = this.jwtService.sign({
        id: user.id,
        email: user.email,
        name: user.name
      })

      return new CreatedResponse({
        message: "Login successful",
        data: token
      })
    }
  }
}
