// account-balance.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AuthService } from '../../auth/auth.service';   

@Injectable()
export class AccountBalanceService {
  private readonly baseURL = `${process.env.SAP_SERVER_URL}/AccountBalance`;

  constructor(private readonly authService: AuthService) {}

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
}
