import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {

    constructor(private readonly eventService: EventService) {}

    @Get()
    getData(): Event[] {
        return this.eventService.getAll();
    }
}
