import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [MessagesService, AuthService],
  controllers: [MessagesController]
})
export class MessagesModule {}
