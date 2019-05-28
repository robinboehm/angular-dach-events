import { Controller, Get, Param } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from '@angular-dach-events/api-interface';

@Controller('event')
export class EventController {

    constructor(private readonly eventService: EventService) {}

    @Get()
    findAll(): Event[] {
        return this.eventService.findAll();
    }

    @Get(':id')
    findOneById(@Param() params): Event {
        return this.eventService.findOne(params.id);
    }
}
