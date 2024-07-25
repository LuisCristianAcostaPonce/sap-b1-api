import { Module } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { BranchesController } from './branches.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [BranchesService, AuthService],
  controllers: [BranchesController]
})
export class BranchesModule {}
