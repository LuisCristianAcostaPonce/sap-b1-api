// service-calls.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AuthService } from '../../auth/auth.service';   

@Injectable()
export class ServiceCallsService {
  private readonly baseURL = `${process.env.SAP_SERVER_URL}/ServiceCalls`;

  constructor(private readonly authService: AuthService) {}

  async create(data: any): Promise<void> {
    await this.authService.ensureSession();  

    const headers = this.authService.getAuthHeaders();
    await axios.post(this.baseURL, data, { headers });
  }

  async findAll(): Promise<any[]> {
    await this.authService.ensureSession();  

    const headers = this.authService.getAuthHeaders();
    const response = await axios.get(this.baseURL, { headers });
    return response.data.value;
  }

  async findOne(id: string): Promise<any> {
    await this.authService.ensureSession();  

    const headers = this.authService.getAuthHeaders();
    const response = await axios.get(`${this.baseURL}('${id}')`, { headers });
    return response.data;
  }

  async update(id: string, newData: any): Promise<void> {
    await this.authService.ensureSession();  

    const headers = this.authService.getAuthHeaders();
    await axios.put(`${this.baseURL}('${id}')`, newData, { headers });
  }

  async delete(id: string): Promise<void> {
    await this.authService.ensureSession();  

    const headers = this.authService.getAuthHeaders();
    await axios.delete(`${this.baseURL}('${id}')`, { headers });
  }
}