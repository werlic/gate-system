import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  root(@Req() req: any, @Res() res: Response) {
    if (!req.isAuthenticated()) {
      return res.redirect('/login')
    }
    return res.redirect('/dashboard');
  }
}
