import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { MusculoRoutingModule } from "./musculo-routing.module";
import { MusculoComponent } from "./musculo.component";
import { MusculoFormComponent } from "./musculo-form/musculo-form.component";
import { MusculoListaComponent } from "./musculo-lista/musculo-lista.component";

@NgModule({
  declarations: [
    MusculoComponent,
    MusculoFormComponent,
    MusculoListaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MusculoRoutingModule,
  ],
})
export class MusculoModule { }
