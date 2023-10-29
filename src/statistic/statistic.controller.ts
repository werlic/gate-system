import { Controller, Get, Render } from '@nestjs/common';

@Controller('statistic')
export class StatisticController {
  @Get()
  @Render('pages/statistic/index')
  Register() {
    return {
      titlePage: 'Gate System',
      message: 'Hello world!',
      menu: 'statistic',
    };
  }
}
