import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  root(@Res() res: Response) {
    return res.render('index.ejs', {
      titlePage: 'Gate System',
      message: 'Hello world!',
    });
  }
}
