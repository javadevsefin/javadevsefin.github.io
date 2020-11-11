import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { GradeRoutingModule } from './grade-routing.module';
import { GradeFormComponent } from './grade-form/grade-form.component';
import { GradeListComponent } from './grade-list/grade-list.component';



@NgModule({
  declarations: [GradeFormComponent, GradeListComponent],
  imports: [
    CommonModule,
    GradeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class GradeModule { }
