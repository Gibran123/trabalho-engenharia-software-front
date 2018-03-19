import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioComponent } from './usuario.component';

const usuarioRoutes: Routes = [
  {
    path: 'usuarios', component: UsuarioComponent, children: [
      { path: 'novo', component: UsuarioFormComponent },
      { path: 'atualizar/:id', component: UsuarioFormComponent },
      { path: 'lista', component: UsuarioListaComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(usuarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsuarioRoutingModule { }