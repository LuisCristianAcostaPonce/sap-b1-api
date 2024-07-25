import { Module } from '@nestjs/common';
import { InventoryGenEntriesService } from './inventory-gen-entries.service';
import { InventoryGenEntriesController } from './inventory-gen-entries.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [InventoryGenEntriesService, AuthService],
  controllers: [InventoryGenEntriesController]
})
export class InventoryGenEntriesModule {}
