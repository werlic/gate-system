import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { MemberModule } from './member/member.module';
import { MembershipModule } from './membership/membership.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [LoginModule, UserModule, MemberModule, MembershipModule, OrdersModule],
})
export class ApiModule {}
