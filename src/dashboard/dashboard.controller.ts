<<<<<<< HEAD
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
=======
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
>>>>>>> dd2c74de5d709b133ef1a3f2184813dacdc909d3
