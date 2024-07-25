import { Module } from '@nestjs/common';
import { DeliveryNotesService } from './delivery-notes.service';
import { DeliveryNotesController } from './delivery-notes.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [DeliveryNotesService, AuthService],
  controllers: [DeliveryNotesController]
})
export class DeliveryNotesModule {}
