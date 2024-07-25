// incoming-payments.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { IncomingPaymentsService } from './incoming-payments.service';   

@Controller('incoming-payments')
export class IncomingPaymentsController {
  constructor(private readonly incomingPaymentsService: IncomingPaymentsService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.incomingPaymentsService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.incomingPaymentsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.incomingPaymentsService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.incomingPaymentsService.delete(id);
  }
}
