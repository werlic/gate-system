import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';

@Controller('api')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    return await this.loginService.login(loginDto)
  }
}
