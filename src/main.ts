// main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Carga las variables de entorno desde .env

  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000; // Lee el puerto desde las variables de entorno o usa 3000 por defecto
  await app.listen(port);
}
bootstrap();
