import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [InvoicesService,AuthService],
  controllers: [InvoicesController]
})
export class InvoicesModule {}
