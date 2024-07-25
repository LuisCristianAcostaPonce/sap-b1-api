import { Module } from '@nestjs/common';
import { EmployeesInfoService } from './employees-info.service';
import { EmployeesInfoController } from './employees-info.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [EmployeesInfoService, AuthService],
  controllers: [EmployeesInfoController]
})
export class EmployeesInfoModule {}
