/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ, options: {
      urls: ['amqp://rabbitmq:5672'],
      queue: 'games_queue',
      queueOptions: {
        durable: false
      },
    }
  });

  await app.listen();
  Logger.log(
    `🚀 Application is running`
  );
}

bootstrap();
