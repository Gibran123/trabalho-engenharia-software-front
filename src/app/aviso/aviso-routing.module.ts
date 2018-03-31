import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisoComponent } from './aviso.component';
import { AvisoFormComponent } from './aviso-form/aviso-form.component';
import { AvisoListaComponent } from './aviso-lista/aviso-lista.component';

const avisoRoutes: Routes = [
  {
    path: 'avisos', component: AvisoComponent, children: [
      { path: 'novo', component: AvisoFormComponent },
      { path: 'atualizar/:id', component: AvisoFormComponent },
      { path: 'lista', component: AvisoListaComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(avisoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AvisoRoutingModule { }