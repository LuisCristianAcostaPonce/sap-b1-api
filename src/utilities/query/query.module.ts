import { Module } from '@nestjs/common';
import { QueryService } from './query.service';
import { QueryController } from './query.controller';
import { AuthService } from '../../auth/auth.service';


@Module({
  providers: [QueryService, AuthService],
  controllers: [QueryController]
})
export class QueryModule {}
