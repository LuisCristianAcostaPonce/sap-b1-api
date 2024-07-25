import { Module } from '@nestjs/common';
import { EmployeeRolesSetupService } from './employee-roles-setup.service';
import { EmployeeRolesSetupController } from './employee-roles-setup.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [EmployeeRolesSetupService, AuthService],
  controllers: [EmployeeRolesSetupController]
})
export class EmployeeRolesSetupModule {}
