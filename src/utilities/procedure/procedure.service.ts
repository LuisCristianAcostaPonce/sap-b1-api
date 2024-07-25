import { Injectable } from '@nestjs/common';
import * as hanaClient from '@sap/hana-client';

@Injectable()
export class ProcedureService {
  private connection: any; // Tipo de conexión depende del cliente SAP HANA específico

  constructor() {
    // Configuración de la conexión a SAP HANA utilizando variables de entorno
    const connOptions = {
      serverNode: process.env.HANA_SERVER,
      uid: process.env.HANA_USER,
      pwd: process.env.HANA_PASSWORD,
    };
    this.connection = hanaClient.createConnection();
    this.connection.connect(connOptions, (err) => {
      if (err) {
        console.error('Error conectando a SAP HANA:', err);
      } else {
        console.log('Conexión exitosa a SAP HANA');
      }
    });
  }

  async executeProcedure(procedureName: string, parameters: any[]): Promise<any> {
    const sql = `CALL ${procedureName}(?)`; // Define la sentencia SQL para llamar al procedimiento
    return new Promise((resolve, reject) => {
      this.connection.exec(sql, parameters, (err, result) => {
        if (err) {
          console.error('Error ejecutando procedimiento:', err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
