// employee-roles-setup.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmployeeRolesSetupService } from './employee-roles-setup.service';   

@Controller('employee-roles-setup')
export class EmployeeRolesSetupController {
  constructor(private readonly employeeRolesSetupService: EmployeeRolesSetupService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.employeeRolesSetupService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.employeeRolesSetupService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.employeeRolesSetupService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.employeeRolesSetupService.delete(id);
  }
}
