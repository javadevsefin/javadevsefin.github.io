import {  } from './modulos/unidade/unidade.module';
import {  } from './modulos/orgao/orgao.module';
import {  } from './modulos/guiche/guiche.module';
import {  } from './modulos/calendario/calendario.module';
import {  } from './modulos/servico/servico.module';
import {  } from './modulos/detalhamento-servico/detalhamento-servico.module';
import {  } from './modulos/grade/grade.module';
import {  } from './modulos/agendamento/agendamento.module';
import {  } from './modulos/contribuinte/contribuinte.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'unidade', loadChildren: './modulos/unidade/unidade.module#UnidadeModule' },
  { path: 'orgao', loadChildren: './modulos/orgao/orgao.module#OrgaoModule' },
  { path: 'guiche', loadChildren: './modulos/guiche/guiche.module#GuicheModule' },
  { path: 'calendario', loadChildren: './modulos/calendario/calendario.module#CalendarioModule'},
  { path: 'servico', loadChildren: './modulos/servico/servico.module#ServicoModule' },
  { path: 'detalhamentoservico', loadChildren: './modulos/detalhamento-servico/detalhamento-servico.module#DetalhamentoServicoModule'},
  { path: 'grade', loadChildren: './modulos/grade/grade.module#GradeModule' },
  { path: 'agendamento', loadChildren: './modulos/agendamento/agendamento.module#AgendamentoModule' },
  { path: 'contribuinte', loadChildren: './modulos/contribuinte/contribuinte.module#ContribuinteModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
