import { Body, Controller, Get, Post, Redirect, Render, Req, Res, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginGuard } from './login.guard';
import { Request, Response } from 'express';
import { AuthenticateGuard } from 'src/auth/authenticate.guard';

@Controller()
export class LoginController {
  constructor(
    private readonly loginService: LoginService
  ) {}

  @Get('/login')
  @Render('pages/login/index')
  Login(@Req() req: Request, @Res() res: Response) {
    if (req.isAuthenticated()) {
      return 
    }
    return { titlePage: 'Gate System', message: 'Hello world!' };
  }

  @UseGuards(LoginGuard)
  @Post('login/auth')
  async authLogin(@Req() req: Request, @Res() res: Response) {
    return res.redirect('/dashboard');
  }

  @UseGuards(AuthenticateGuard)
  @Post('/logout')
  logout(@Req() req: Request, @Res() res: Response) {
    req.session.destroy((err) => {
      console.log(err)
    });
    return res.redirect('/login');
  }
}
