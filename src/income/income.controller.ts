import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class IncomeController {
  @Get('income')
  @Render('pages/income/index')
  Income() {
    return {
      titlePage: 'Gate System | Income',
      message: 'Hello world!',
      menu: 'income',
    };
  }
}
