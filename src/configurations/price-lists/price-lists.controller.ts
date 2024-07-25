// price-lists.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PriceListsService } from './price-lists.service';   

@Controller('price-lists')
export class PriceListsController {
  constructor(private readonly priceListsService: PriceListsService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.priceListsService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.priceListsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.priceListsService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.priceListsService.delete(id);
  }
}
