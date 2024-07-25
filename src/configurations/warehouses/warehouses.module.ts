import { Module } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { WarehousesController } from './warehouses.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [WarehousesService, AuthService],
  controllers: [WarehousesController]
})
export class WarehousesModule {}
