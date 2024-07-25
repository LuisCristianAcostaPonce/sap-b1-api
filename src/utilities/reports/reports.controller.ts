// reports.controller.ts

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';   

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  findAll(): Promise<any[]> {
    return this.reportsService.findAll();
  }

  @Post(':reportId/generate')
  generateReport(@Param('reportId') reportId: string, @Body() parameters: any): Promise<any> {
    return this.reportsService.generateReport(reportId, parameters);
  }
}
