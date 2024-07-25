import { Module } from '@nestjs/common';
import { EmployeeAbsenceInfoService } from './employee-absence-info.service';
import { EmployeeAbsenceInfoController } from './employee-absence-info.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [EmployeeAbsenceInfoService, AuthService],
  controllers: [EmployeeAbsenceInfoController]
})
export class EmployeeAbsenceInfoModule {}
