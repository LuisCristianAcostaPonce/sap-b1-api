import { Module } from '@nestjs/common';
import { BusinessPartnersService } from './business-partners.service';
import { BusinessPartnersController } from './business-partners.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [BusinessPartnersService,AuthService],
  controllers: [BusinessPartnersController]
})
export class BusinessPartnersModule {}
