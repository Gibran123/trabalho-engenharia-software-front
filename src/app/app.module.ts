import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario/usuario.service';
import { FichaModule } from './ficha/ficha.module';
import { AuthModule } from './auth/auth.module';
import { DicaModule } from './dica/dica.module';
import { AlunoModule } from './aluno/aluno.module';
import { AvisoModule } from './aviso/aviso.module';
import { MaquinaModule } from './maquina/maquina.module';
import { MusculoService } from './musculo/musculo.service';
import { MaquinaService } from './maquina/maquina.service';
import { MusculoModule } from './musculo/musculo.module';
import { ExercicioModule } from './exercicio/exercicio.module';
import { ExercicioService } from './exercicio/exercicio.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AuthModule,
    UsuarioModule,
    FichaModule,
    DicaModule,
    AlunoModule,
    AvisoModule,
    MaquinaModule,
    MusculoModule,
    ExercicioModule,
    AppRoutingModule,
  ],
  providers: [UsuarioService, MusculoService, MaquinaService, ExercicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
