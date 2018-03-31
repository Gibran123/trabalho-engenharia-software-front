import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercicioComponent } from './exercicio.component';
import { ExercicioFormComponent } from './exercicio-form/exercicio-form.component';
import { ExercicioListaComponent } from './exercicio-lista/exercicio-lista.component';

const exercicioRoutes: Routes = [
  {
    path: 'exercicios', component: ExercicioComponent, children: [
      { path: 'novo', component: ExercicioFormComponent },
      { path: 'atualizar/:id', component: ExercicioFormComponent },
      { path: 'lista', component: ExercicioListaComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(exercicioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExercicioRoutingModule { }