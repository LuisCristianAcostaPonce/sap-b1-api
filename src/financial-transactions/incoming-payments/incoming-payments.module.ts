import { Module } from '@nestjs/common';
import { IncomingPaymentsService } from './incoming-payments.service';
import { IncomingPaymentsController } from './incoming-payments.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [IncomingPaymentsService, AuthService],
  controllers: [IncomingPaymentsController]
})
export class IncomingPaymentsModule {}
