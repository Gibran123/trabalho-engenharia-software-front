import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoComponent } from './aluno.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { SharedModule } from '../shared/shared.module';
import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoService } from './aluno.service';

@NgModule({
  declarations: [
    AlunoComponent,
    AlunoFormComponent,
    AlunoListaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlunoRoutingModule,
  ],
  providers: [AlunoService]
})
export class AlunoModule { }