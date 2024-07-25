import { Module } from '@nestjs/common';
import { AccountBalanceService } from './account-balance.service';
import { AccountBalanceController } from './account-balance.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [AccountBalanceService, AuthService],
  controllers: [AccountBalanceController]
})
export class AccountBalanceModule {}
