import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioFormComponent } from './calendario-form/calendario-form.component';
import { CalendarioListComponent } from './calendario-list/calendario-list.component';

const routes: Routes = [
  { path: '', component: CalendarioListComponent },
  { path: 'new', component: CalendarioFormComponent },
  { path: 'editar/:id', component: CalendarioFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioRoutingModule { }
