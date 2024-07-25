// attachments.controller.ts

import { Controller, Post, Get, Delete, Param, Body, Req, Res } from '@nestjs/common';
import { AttachmentsService } from './attachments.service';   

@Controller('attachments')
export class AttachmentsController {
  constructor(private readonly attachmentsService: AttachmentsService) {}

  @Post(':entityId/:entityType')
  async upload(@Param('entityId') entityId: string, @Param('entityType') entityType: string, @Req() req: any): Promise<void> {
    await this.attachmentsService.upload(req.file, entityId, entityType);
  }

  @Get(':id')
  async download(@Param('id') attachmentId: string, @Res() res: any): Promise<void> {
    const { data, headers } = await this.attachmentsService.download(attachmentId);
    
    res.set({
      'Content-Type': headers['content-type'],
      'Content-Length': headers['content-length'],
    });
    
    res.send(data);
  }

  @Delete(':id')
  async delete(@Param('id') attachmentId: string): Promise<void> {
    await this.attachmentsService.delete(attachmentId);
  }
}
