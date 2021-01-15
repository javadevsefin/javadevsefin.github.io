import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { PainelRelatorioComponent } from './painel-relatorio/painel-relatorio.component';
import { PainelRelatorioAgendamentoComponent } from './painel-relatorio-agendamento/painel-relatorio-agendamento.component';


@NgModule({
  declarations: [PainelRelatorioComponent, PainelRelatorioAgendamentoComponent],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class RelatoriosModule { }
