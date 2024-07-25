// quotations.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { QuotationsService } from './quotations.service';   

@Controller('quotations')
export class QuotationsController {
  constructor(private readonly quotationsService: QuotationsService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.quotationsService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.quotationsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.quotationsService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.quotationsService.delete(id);
  }
}