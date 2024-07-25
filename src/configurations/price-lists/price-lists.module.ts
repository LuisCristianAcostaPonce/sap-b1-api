import { Module } from '@nestjs/common';
import { PriceListsService } from './price-lists.service';
import { PriceListsController } from './price-lists.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [PriceListsService, AuthService],
  controllers: [PriceListsController]
})
export class PriceListsModule {}
