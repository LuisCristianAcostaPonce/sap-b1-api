import { Module } from '@nestjs/common';
import { QuotationsService } from './quotations.service';
import { QuotationsController } from './quotations.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [QuotationsService, AuthService],
  controllers: [QuotationsController]
})
export class QuotationsModule {}
