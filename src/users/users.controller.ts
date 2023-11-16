import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  @Render('pages/users/index')
  index() {
    return { titlePage: 'Gate System', message: 'Hello world!', menu: 'users' };
  }

  @Get(':id')
  @Render('pages/users/show')
  show() {
    return { titlePage: 'Gate System', message: 'Hello world!', menu: 'users' };
  }
}
