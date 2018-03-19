import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsuarioComponent } from './usuario.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioService } from './usuario.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioFormComponent,
    UsuarioListaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuarioRoutingModule
  ],
})
export class UsuarioModule { }