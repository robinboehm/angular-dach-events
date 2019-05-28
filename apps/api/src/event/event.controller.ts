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
    findOne(@Param('id') id: string): Event {
        return this.eventService.findOneById(id);
    }
}
