import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import { AuthenticateGuard } from 'src/auth/authenticate.guard';

@Controller()
export class DashboardController {
  @UseGuards(AuthenticateGuard)
  @Get('dashboard')
  @Render('pages/dashboard/index')
  dashboard(@Req() req) {
    return {
      titlePage: 'Gate System | Dashboard',
      message: req.user,
      menu: 'dashboard',
    };
  }
}
