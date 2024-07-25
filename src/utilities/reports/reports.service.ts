// reports.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AuthService } from '../../auth/auth.service';   

@Injectable()
export class ReportsService {
  private readonly baseURL = `${process.env.SAP_SERVER_URL}/ReportTypes`;

  constructor(private readonly authService: AuthService) {}

  async findAll(): Promise<any[]> {
    await this.authService.ensureSession();  

    const headers = this.authService.getAuthHeaders();
    const response = await axios.get(this.baseURL, { headers });
    return response.data.value;
  }

  async generateReport(reportId: string, parameters: any): Promise<any> {
    await this.authService.ensureSession();  

    const headers = {
      ...this.authService.getAuthHeaders(),
      'Content-Type': 'application/json',
    };

    const response = await axios.post(`${this.baseURL}('${reportId}')/GenerateReport`, parameters, { headers });
    return response.data;
  }
}
