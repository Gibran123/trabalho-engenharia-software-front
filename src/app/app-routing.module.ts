import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario/usuario-lista/usuario-lista.component';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';

const usuarioRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '**', redirectTo: '/usuarios/novo' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(usuarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }