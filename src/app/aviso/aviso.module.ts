import { NgModule } from '@angular/core';

import { AvisoService } from './aviso.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AvisoRoutingModule } from './aviso-routing.module';
import { AvisoFormComponent } from './aviso-form/aviso-form.component';
import { AvisoListaComponent } from './aviso-lista/aviso-lista.component';
import { AvisoComponent } from './aviso.component';

@NgModule({
  declarations: [
    AvisoComponent,
    AvisoFormComponent,
    AvisoListaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AvisoRoutingModule,
  ],
  providers: [AvisoService],
})
export class AvisoModule { }