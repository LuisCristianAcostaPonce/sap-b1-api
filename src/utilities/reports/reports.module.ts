import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [ReportsService, AuthService],
  controllers: [ReportsController]
})
export class ReportsModule {}
