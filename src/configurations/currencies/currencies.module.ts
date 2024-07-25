import { Module } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CurrenciesController } from './currencies.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [CurrenciesService, AuthService],
  controllers: [CurrenciesController]
})
export class CurrenciesModule {}
