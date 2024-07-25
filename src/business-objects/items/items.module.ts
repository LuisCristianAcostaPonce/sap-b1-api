import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [ItemsService, AuthService],
  controllers: [ItemsController]
})
export class ItemsModule {}
