import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DicaComponent } from './dica.component';
import { DicaFormComponent } from './dica-form/dica-form.component';
import { DicaListaComponent } from './dica-lista/dica-lista.component';

const fichaRoutes: Routes = [
  {
    path: 'dicas', component: DicaComponent, children: [
      { path: 'nova', component: DicaFormComponent },
      { path: 'atualizar/:id', component: DicaFormComponent },
      { path: 'lista', component: DicaListaComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(fichaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DicaRoutingModule { }