import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import {AppointmentComponent} from '../appointment/appointment.component'
const routes: Routes = [
  {
    path: 'lists',
    component: AppointmentListComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
