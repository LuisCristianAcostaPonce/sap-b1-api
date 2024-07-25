import { Module } from '@nestjs/common';
import { PurchaseOrdersService } from './purchase-orders.service';
import { PurchaseOrdersController } from './purchase-orders.controller';
import { AuthService } from '../../auth/auth.service';
@Module({
  providers: [PurchaseOrdersService, AuthService],
  controllers: [PurchaseOrdersController]
})
export class PurchaseOrdersModule {}
