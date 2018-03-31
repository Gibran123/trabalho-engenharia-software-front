import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusculoComponent } from './musculo.component';
import { MusculoFormComponent } from './musculo-form/musculo-form.component';
import { MusculoListaComponent } from './musculo-lista/musculo-lista.component';

const musculoRoutes: Routes = [
  {
    path: 'musculos', component: MusculoComponent, children: [
      { path: 'novo', component: MusculoFormComponent },
      { path: 'atualizar/:id', component: MusculoFormComponent },
      { path: 'lista', component: MusculoListaComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(musculoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MusculoRoutingModule { }