import { Module } from '@nestjs/common';
import { StatisticController } from './statistic.controller';

@Module({
  imports: [],
  controllers: [StatisticController],
  providers: [],
})
export class StatisticModule {}
