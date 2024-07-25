import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {
  private readonly baseURL = process.env.SAP_SERVER_URL; // Accede a SAP_SERVER_URL desde las variables de entorno

  private sessionId: string;
  private routeId: string;

  async ensureSession(): Promise<void> {
    if (!this.sessionId) {
      await this.login();
    }
  }

  private async login(): Promise<void> {
    const response = await axios.post(`${this.baseURL}/Login`, {
      UserName: '{USERNAME}',
      Password: '{PASSWORD}',
      CompanyDB: '{COMPANY_DB}',
    });

    this.sessionId = response.data.SessionId;
    this.routeId = response.headers['Set-Cookie'].split(';')[0];
  }

  getAuthHeaders() {
    return {
      Cookie: this.routeId,
      'B1S-Session': this.sessionId,
    };
  }
}
