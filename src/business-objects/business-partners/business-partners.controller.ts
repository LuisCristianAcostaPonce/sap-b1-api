// business-partners.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BusinessPartnersService } from './business-partners.service';

@Controller('business-partners')
export class BusinessPartnersController {
  constructor(private readonly businessPartnersService: BusinessPartnersService) {}

  @Get()
  findAll(): Promise<any[]> {
    return this.businessPartnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.businessPartnersService.findOne(id);
  }

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.businessPartnersService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.businessPartnersService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.businessPartnersService.delete(id);
  }
}
