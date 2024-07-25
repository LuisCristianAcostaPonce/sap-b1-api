import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [OrdersService, AuthService],
  controllers: [OrdersController]
})
export class OrdersModule {}
