// activity-statuses.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ActivityStatusesService } from './activity-statuses.service';   

@Controller('activity-statuses')
export class ActivityStatusesController {
  constructor(private readonly activityStatusesService: ActivityStatusesService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.activityStatusesService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.activityStatusesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.activityStatusesService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.activityStatusesService.delete(id);
  }
}
