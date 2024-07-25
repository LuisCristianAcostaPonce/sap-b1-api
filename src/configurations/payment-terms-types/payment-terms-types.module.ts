import { Module } from '@nestjs/common';
import { PaymentTermsTypesService } from './payment-terms-types.service';
import { PaymentTermsTypesController } from './payment-terms-types.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [PaymentTermsTypesService, AuthService],
  controllers: [PaymentTermsTypesController]
})
export class PaymentTermsTypesModule {}
