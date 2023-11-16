import { Module } from '@nestjs/common';
import { IncomeController } from './income.controller';

@Module({
  controllers: [IncomeController],
  providers: [],
})
export class IncomeModule {}
