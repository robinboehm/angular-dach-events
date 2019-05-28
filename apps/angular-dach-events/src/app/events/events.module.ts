import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events-index/events-index.component';
import { EventsShowComponent } from './events-show/events-show.component';

@NgModule({
  declarations: [EventsComponent, EventsShowComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  exports: [EventsComponent, EventsShowComponent]
})
export class EventsModule { }
