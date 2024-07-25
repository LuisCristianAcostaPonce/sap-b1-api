// employees-info.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmployeesInfoService } from './employees-info.service';   

@Controller('employees-info')
export class EmployeesInfoController {
  constructor(private readonly employeesInfoService: EmployeesInfoService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.employeesInfoService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.employeesInfoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.employeesInfoService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.employeesInfoService.delete(id);
  }
}
