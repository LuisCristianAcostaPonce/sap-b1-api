// query.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { QueryService } from './query.service'; // Ajusta la ruta según tu estructura

@Controller('query')
export class QueryController {
  constructor(private readonly queryService: QueryService) {}

  @Post('post-query')
  postQuery(@Body() query: any): Promise<any> {
    return this.queryService.postQuery(query);
  }
}
