// account-balance.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { AccountBalanceService } from './account-balance.service';   

@Controller('account-balance')
export class AccountBalanceController {
  constructor(private readonly accountBalanceService: AccountBalanceService) {}

  @Get()
  findAll(): Promise<any[]> {
    return this.accountBalanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.accountBalanceService.findOne(id);
  }
}
