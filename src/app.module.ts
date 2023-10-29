import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';

import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RegisterModule } from './register/register.module';
import { StatisticModule } from './statistic/statistic.module';
import { IncomeModule } from './income/income.module';

@Module({
  imports: [
    UsersModule,
    LoginModule,
    DashboardModule,
    RegisterModule,
    StatisticModule,
    IncomeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
