import { Controller, Get, Render } from '@nestjs/common';

@Controller('register')
export class RegisterController {
  @Get()
  @Render('pages/register/index')
  Register() {
    return { titlePage: 'Gate System', message: 'Hello world!' };
  }
}
