import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [LoginModule, UserModule],
})
export class ApiModule {}
