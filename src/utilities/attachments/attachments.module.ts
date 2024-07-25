import { Module } from '@nestjs/common';
import { AttachmentsService } from './attachments.service';
import { AttachmentsController } from './attachments.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [AttachmentsService, AuthService],
  controllers: [AttachmentsController]
})
export class AttachmentsModule {}
