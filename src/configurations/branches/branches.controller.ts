// branches.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BranchesService } from './branches.service';   

@Controller('branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.branchesService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.branchesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.branchesService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.branchesService.delete(id);
  }
}
