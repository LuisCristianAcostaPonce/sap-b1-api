import { Module } from '@nestjs/common';
import { JournalEntriesService } from './journal-entries.service';
import { JournalEntriesController } from './journal-entries.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [JournalEntriesService, AuthService],
  controllers: [JournalEntriesController]
})
export class JournalEntriesModule {}
