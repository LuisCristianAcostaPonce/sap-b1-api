import { Module } from '@nestjs/common';
import { InventoryGenExitsService } from './inventory-gen-exits.service';
import { InventoryGenExitsController } from './inventory-gen-exits.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [InventoryGenExitsService, AuthService],
  controllers: [InventoryGenExitsController]
})
export class InventoryGenExitsModule {}
