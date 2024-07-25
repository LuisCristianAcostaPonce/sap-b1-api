// service-calls.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ServiceCallsService } from './service-calls.service';   

@Controller('service-calls')
export class ServiceCallsController {
  constructor(private readonly serviceCallsService: ServiceCallsService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.serviceCallsService.create(data);
  }

  @Get()
  findAll(): Promise<any[]> {
    return this.serviceCallsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.serviceCallsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.serviceCallsService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.serviceCallsService.delete(id);
  }
}
