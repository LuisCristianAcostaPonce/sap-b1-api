import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [CompaniesService, AuthService],
  controllers: [CompaniesController]
})
export class CompaniesModule {}
