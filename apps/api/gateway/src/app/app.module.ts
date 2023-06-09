import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from '../config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    GamesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
