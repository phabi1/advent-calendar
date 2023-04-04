/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const globalPrefix = configService.get('app.prefix', 'api');
  app.setGlobalPrefix(globalPrefix);
  
  const port = configService.get('app.port', 3000);
  const host = configService.get('app.host', '0.0.0.0');

  await app.listen(port, host);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
