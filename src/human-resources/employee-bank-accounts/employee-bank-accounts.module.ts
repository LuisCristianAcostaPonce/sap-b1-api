import { Module } from '@nestjs/common';
import { EmployeeBankAccountsService } from './employee-bank-accounts.service';
import { EmployeeBankAccountsController } from './employee-bank-accounts.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [EmployeeBankAccountsService, AuthService],
  controllers: [EmployeeBankAccountsController]
})
export class EmployeeBankAccountsModule {}
