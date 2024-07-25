// attachments.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AuthService } from '../../auth/auth.service';   

@Injectable()
export class AttachmentsService {
  private readonly baseURL = `${process.env.SAP_SERVER_URL}/Attachments`;

  constructor(private readonly authService: AuthService) {}

  async upload(file: any, entityId: string, entityType: string): Promise<void> {
    await this.authService.ensureSession();  

    const headers = {
      ...this.authService.getAuthHeaders(),
      'Content-Type': 'application/octet-stream',
      'Slug': file.originalname,
      'X-Entity-Key': entityId,
      'X-Entity-Type': entityType,
    };

    await axios.post(this.baseURL, file.buffer, { headers });
  }

  async download(attachmentId: string): Promise<any> {
    await this.authService.ensureSession();  

    const headers = this.authService.getAuthHeaders();
    const response = await axios.get(`${this.baseURL}('${attachmentId}')`, { headers, responseType: 'arraybuffer' });
    
    return {
      data: response.data,
      headers: response.headers,
    };
  }

  async delete(attachmentId: string): Promise<void> {
    await this.authService.ensureSession();  

    const headers = this.authService.getAuthHeaders();
    await axios.delete(`${this.baseURL}('${attachmentId}')`, { headers });
  }
}
