// employee-bank-accounts.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmployeeBankAccountsService } from './employee-bank-accounts.service';   

@Controller('employee-bank-accounts')
export class EmployeeBankAccountsController {
  constructor(private readonly employeeBankAccountsService: EmployeeBankAccountsService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.employeeBankAccountsService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.employeeBankAccountsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.employeeBankAccountsService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.employeeBankAccountsService.delete(id);
  }
}
