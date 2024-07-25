import { Module } from '@nestjs/common';
import { BanksService } from './banks.service';
import { BanksController } from './banks.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [BanksService, AuthService],
  controllers: [BanksController]
})
export class BanksModule {}
