import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DicaComponent } from './dica.component';
import { DicaFormComponent } from './dica-form/dica-form.component';
import { DicaListaComponent } from './dica-lista/dica-lista.component';
import { DicaRoutingModule } from './dica-routing.module';
import { DicaService } from './dica.service';

@NgModule({
  declarations: [
    DicaComponent,
    DicaFormComponent,
    DicaListaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DicaRoutingModule,
  ],
  providers: [DicaService],
})
export class DicaModule { }