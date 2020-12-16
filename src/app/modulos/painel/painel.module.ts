import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelAListFormComponent } from './painel-a-list-form/painel-a-list-form.component';


@NgModule({
  declarations: [PainelAListFormComponent],
  imports: [
    CommonModule,
    PainelRoutingModule
  ]
})
export class PainelModule { }
