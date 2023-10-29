import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class LoginController {
  @Get()
  @Render('pages/login/index')
  Login() {
    return { titlePage: 'Gate System', message: 'Hello world!' };
  }
}
