import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Event } from '@angular-dach-events/api-interface';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private readonly http: HttpClient) {}

  getAll() : Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:3333/api/events');
  }

  getOneById(id: string) : Observable<Event> {
    return this.http.get<Event>(`http://localhost:3333/api/events/${id}`);
  }

}
