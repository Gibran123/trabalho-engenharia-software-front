import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaquinaComponent } from './maquina.component';
import { MaquinaFormComponent } from './maquina-form/maquina-form.component';
import { MaquinaListaComponent } from './maquina-lista/maquina-lista.component';

const maquinaRoutes: Routes = [
  {
    path: 'maquinas', component: MaquinaComponent, children: [
      { path: 'nova', component: MaquinaFormComponent },
      { path: 'atualizar/:id', component: MaquinaFormComponent },
      { path: 'lista', component: MaquinaListaComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(maquinaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MaquinaRoutingModule { }