import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExercicioComponent } from './exercicio.component';
import { SharedModule } from '../shared/shared.module';
import { ExercicioFormComponent } from './exercicio-form/exercicio-form.component';
import { ExercicioListaComponent } from './exercicio-lista/exercicio-lista.component';
import { ExercicioRoutingModule } from './exercicio-routing.module';

@NgModule({
  declarations: [
    ExercicioComponent,
    ExercicioFormComponent,
    ExercicioListaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExercicioRoutingModule,
  ]
})
export class ExercicioModule { }