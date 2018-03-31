import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessorComponent } from './professor.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { ProfessorListaComponent } from './professor-lista/professor-lista.component';

const professorRoutes: Routes = [
  {
    path: 'professores', component: ProfessorComponent, children: [
      { path: 'novo', component: ProfessorFormComponent },
      { path: 'atualizar/:id', component: ProfessorFormComponent },
      { path: 'lista', component: ProfessorListaComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(professorRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfessorRoutingModule { }