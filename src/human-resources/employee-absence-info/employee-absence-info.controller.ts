// employee-absence-info.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmployeeAbsenceInfoService } from './employee-absence-info.service';   

@Controller('employee-absence-info')
export class EmployeeAbsenceInfoController {
  constructor(private readonly employeeAbsenceInfoService: EmployeeAbsenceInfoService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.employeeAbsenceInfoService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.employeeAbsenceInfoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.employeeAbsenceInfoService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.employeeAbsenceInfoService.delete(id);
  }
}
