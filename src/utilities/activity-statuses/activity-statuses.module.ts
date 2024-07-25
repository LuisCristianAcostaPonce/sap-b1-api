import { Module } from '@nestjs/common';
import { ActivityStatusesService } from './activity-statuses.service';
import { ActivityStatusesController } from './activity-statuses.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [ActivityStatusesService, AuthService],
  controllers: [ActivityStatusesController]
})
export class ActivityStatusesModule {}
