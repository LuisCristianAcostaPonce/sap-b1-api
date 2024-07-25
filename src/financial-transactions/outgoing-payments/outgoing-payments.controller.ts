// outgoing-payments.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { OutgoingPaymentsService } from './outgoing-payments.service';   

@Controller('outgoing-payments')
export class OutgoingPaymentsController {
  constructor(private readonly outgoingPaymentsService: OutgoingPaymentsService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.outgoingPaymentsService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.outgoingPaymentsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.outgoingPaymentsService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.outgoingPaymentsService.delete(id);
  }
}
