// inventory-gen-exits.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { InventoryGenExitsService } from './inventory-gen-exits.service';   

@Controller('inventory-gen-exits')
export class InventoryGenExitsController {
  constructor(private readonly inventoryGenExitsService: InventoryGenExitsService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.inventoryGenExitsService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.inventoryGenExitsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.inventoryGenExitsService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.inventoryGenExitsService.delete(id);
  }
}
