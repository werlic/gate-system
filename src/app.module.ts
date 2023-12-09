import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';

import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RegisterModule } from './register/register.module';
import { StatisticModule } from './statistic/statistic.module';
import { IncomeModule } from './income/income.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { MemberModule } from './member/member.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.development.env', '.production.env']
    }),
    TypeOrmModule.forRootAsync({
      useFactory(configService: ConfigService) {
        return {
          type: 'mysql',
          host: configService.get('MYSQL_HOST'),
          port: configService.get('MYSQL_PORT') ? parseInt(configService.get('MYSQL_PORT')) : 3306,
          username: configService.get('MYSQL_USER'),
          password: configService.get('MYSQL_PASS'),
          database: configService.get('MYSQL_DB') ?? 'gate_system',
          migrations: ['src/migrations/**/*{.ts,.js'],
          autoLoadEntities: true,
          synchronize: configService.get('SYNC_DB') && configService.get('SYNC_DB').toLowerCase() == 'true' 
            ? true : false
        }
      },
      inject: [ConfigService]
    }),
    PassportModule.register({
      session: true
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRATION
      }
    }),
    // UsersModule,
    // LoginModule,
    // DashboardModule,
    // RegisterModule,
    // StatisticModule,
    // IncomeModule,
    // MemberModule,
    ApiModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
