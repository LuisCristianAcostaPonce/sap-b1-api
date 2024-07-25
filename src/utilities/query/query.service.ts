// query.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AuthService } from '../../auth/auth.service'; // Ajusta la ruta según tu estructura

@Injectable()
export class QueryService {
  private readonly baseURL = `${process.env.SAP_SERVER_URL}/QueryService_PostQuery`;

  constructor(private readonly authService: AuthService) {}

  async postQuery(query: any): Promise<any> {
    await this.authService.ensureSession(); // Asegura que la sesión esté activa antes de hacer la solicitud

    const headers = {
      ...this.authService.getAuthHeaders(),
      'Content-Type': 'application/json',
    };

    const response = await axios.post(this.baseURL, query, { headers });
    return response.data;
  }
}
