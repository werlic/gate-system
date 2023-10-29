import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class DashboardController {
  @Get('dashboard')
  @Render('pages/dashboard/index')
  dashboard() {
    return {
      titlePage: 'Gate System | Dashboard',
      message: 'Hello world!',
      menu: 'dashboard',
    };
  }
}
