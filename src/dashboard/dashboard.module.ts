import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ session: true })
  ],
  controllers: [DashboardController],
  providers: [],
})
export class DashboardModule {}
