import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FichaComponent } from './ficha.component';
import { FichaFormComponent } from './ficha-form/ficha-form.component';
import { FichaListaComponent } from './ficha-lista/ficha-lista.component';

const fichaRoutes: Routes = [
  {
    path: 'fichas', component: FichaComponent, children: [
      { path: 'nova', component: FichaFormComponent },
      { path: 'atualizar/:id', component: FichaFormComponent },
      { path: 'lista', component: FichaListaComponent },
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
export class FichaRoutingModule { }