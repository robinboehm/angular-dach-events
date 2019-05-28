import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventController } from '../event/event.controller';
import { EventService } from '../event/event.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    EventController
  ],
  providers: [
    AppService,
    EventService
  ]
})
export class AppModule {}
