import { Module } from '@nestjs/common';
import { ServiceCallsService } from './service-calls.service';
import { ServiceCallsController } from './service-calls.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [ServiceCallsService, AuthService],
  controllers: [ServiceCallsController]
})
export class ServiceCallsModule {}
