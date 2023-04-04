import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('game')
export class GameController {

    constructor(@Inject('games') private client: ClientProxy) { }

    @Get()
    games() {
        return this.client.send('findAllGame', {});
    }

    @Get(':id')
    game(@Param() id: number) {
        return this.client.send('findOneGame', id);
    }

    @Post()
    createGame(@Body() payload: any) {
        return this.client.send('createGame', payload);
    }
}
