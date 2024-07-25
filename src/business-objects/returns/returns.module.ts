import { Module } from '@nestjs/common';
import { ReturnsService } from './returns.service';
import { ReturnsController } from './returns.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [ReturnsService, AuthService],
  controllers: [ReturnsController]
})
export class ReturnsModule {}
