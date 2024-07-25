import { Module } from '@nestjs/common';
import { TaxCodesService } from './tax-codes.service';
import { TaxCodesController } from './tax-codes.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [TaxCodesService,AuthService],
  controllers: [TaxCodesController]
})
export class TaxCodesModule {}
