import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Event } from '@angular-dach-events/api-interface';

import { EventsService } from '../events.service';

@Component({
  selector: 'angular-dach-events-index',
  templateUrl: './events-index.component.html',
  styleUrls: ['./events-index.component.css']
})
export class EventsComponent implements OnInit {

  events$ : Observable<Event>

  constructor(private readonly eventService: EventsService) { }

  ngOnInit() {
    this.events$ = this.eventService.getAll();
  }

}
