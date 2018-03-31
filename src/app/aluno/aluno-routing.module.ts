import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoComponent } from './aluno.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';

const alunoRoutes: Routes = [
  {
    path: 'alunos', component: AlunoComponent, children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: 'atualizar/:id', component: AlunoFormComponent },
      { path: 'lista', component: AlunoListaComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(alunoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AlunoRoutingModule { }