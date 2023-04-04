import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GameController } from './controllers/game/game.controller';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'games',
        useFactory: (configService: ConfigService) => {
          return {
            transport: Transport.RMQ,
            options: {
              urls: configService.get('queue.urls', ['amqp://rabbitmq:5672']),
              queue: configService.get('queue.name', 'games_queue'),
              queueOptions: {
                durable: false,
              },
            },
          };
        },
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [GameController],
})
export class GamesModule {}
