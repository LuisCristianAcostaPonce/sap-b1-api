import { Module } from '@nestjs/common';
import { OutgoingPaymentsService } from './outgoing-payments.service';
import { OutgoingPaymentsController } from './outgoing-payments.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [OutgoingPaymentsService, AuthService],
  controllers: [OutgoingPaymentsController]
})
export class OutgoingPaymentsModule {}
