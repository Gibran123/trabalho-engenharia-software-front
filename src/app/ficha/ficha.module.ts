import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichaComponent } from './ficha.component';
import { FichaFormComponent } from './ficha-form/ficha-form.component';
import { FichaListaComponent } from './ficha-lista/ficha-lista.component';
import { SharedModule } from '../shared/shared.module';
import { FichaRoutingModule } from './ficha-routing.module';
import { FichaService } from './ficha.service';

@NgModule({
  declarations: [
    FichaComponent,
    FichaFormComponent,
    FichaListaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FichaRoutingModule,
  ],
  providers: [FichaService]
})
export class FichaModule { }