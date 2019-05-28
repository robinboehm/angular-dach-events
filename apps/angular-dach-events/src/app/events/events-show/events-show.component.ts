import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Event } from '@angular-dach-events/api-interface';
import { EventsService } from '../events.service';


@Component({
  selector: 'angular-dach-events-events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent implements OnInit {

  event : Event

  constructor(
    private readonly eventService: EventsService,
    private readonly route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.eventService.getOneById(params.isbn).subscribe(book => this.event = book);
    });
  }

}
