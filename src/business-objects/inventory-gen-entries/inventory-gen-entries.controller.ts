// inventory-gen-entries.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { InventoryGenEntriesService } from './inventory-gen-entries.service';   

@Controller('inventory-gen-entries')
export class InventoryGenEntriesController {
  constructor(private readonly inventoryGenEntriesService: InventoryGenEntriesService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.inventoryGenEntriesService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.inventoryGenEntriesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.inventoryGenEntriesService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.inventoryGenEntriesService.delete(id);
  }
}
