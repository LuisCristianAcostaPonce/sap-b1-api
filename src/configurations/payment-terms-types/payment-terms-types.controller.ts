// payment-terms-types.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PaymentTermsTypesService } from './payment-terms-types.service';   

@Controller('payment-terms-types')
export class PaymentTermsTypesController {
  constructor(private readonly paymentTermsTypesService: PaymentTermsTypesService) {}

  @Post()
  create(@Body() data: any): Promise<void> {
    return this.paymentTermsTypesService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.paymentTermsTypesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newData: any): Promise<void> {
    return this.paymentTermsTypesService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.paymentTermsTypesService.delete(id);
  }
}
