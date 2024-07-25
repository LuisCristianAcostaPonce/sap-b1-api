// tax-codes.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TaxCodesService } from './tax-codes.service';   

@Controller('tax-codes')
export class TaxCodesController {
  constructor(private readonly taxCodesService: TaxCodesService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.taxCodesService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.taxCodesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.taxCodesService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.taxCodesService.delete(id);
  }
}
