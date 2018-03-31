import { NgModule } from '@angular/core';

import { ProfessorComponent } from './professor.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { ProfessorListaComponent } from './professor-lista/professor-lista.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorService } from './professor.service';

@NgModule({
  declarations: [
    ProfessorComponent,
    ProfessorFormComponent,
    ProfessorListaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfessorRoutingModule,
  ],
  providers: [ProfessorService]
})
export class ProfessorModule { }