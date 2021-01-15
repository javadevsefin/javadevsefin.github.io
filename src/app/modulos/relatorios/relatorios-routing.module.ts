import { PainelRelatorioAgendamentoComponent } from './painel-relatorio-agendamento/painel-relatorio-agendamento.component';
import { PainelRelatorioComponent } from './painel-relatorio/painel-relatorio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'painelrelatorio', component: PainelRelatorioComponent },
  { path: 'painelrelatorioagendamento', component: PainelRelatorioAgendamentoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
