import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';

@Module({
  imports: [],
  controllers: [RegisterController],
  providers: [],
})
export class RegisterModule {}
