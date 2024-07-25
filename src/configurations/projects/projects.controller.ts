// projects.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProjectsService } from './projects.service';   

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.projectsService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.projectsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.projectsService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.projectsService.delete(id);
  }
}
