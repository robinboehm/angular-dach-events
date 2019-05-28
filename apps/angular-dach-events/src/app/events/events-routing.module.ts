import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events-index/events-index.component';
import { EventsShowComponent } from './events-show/events-show.component';

const routes: Routes = [{
  path: '',
  component: EventsComponent
},
{
  path: ':id',
  component: EventsShowComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
