import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendamentoFormComponent } from './agendamento-form/agendamento-form.component';
import { AgendamentoListComponent } from './agendamento-list/agendamento-list.component';
import { AgendamentoUpFormComponent } from './agendamento-up-form/agendamento-up-form.component';


@NgModule({
  declarations: [AgendamentoFormComponent, AgendamentoListComponent, AgendamentoUpFormComponent],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AgendamentoModule { }
