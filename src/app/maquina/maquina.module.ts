import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaquinaService } from "./maquina.service";
import { MaquinaComponent } from "./maquina.component";
import { MaquinaFormComponent } from "./maquina-form/maquina-form.component";
import { MaquinaListaComponent } from "./maquina-lista/maquina-lista.component";
import { SharedModule } from "../shared/shared.module";
import { MaquinaRoutingModule } from "./maquina-routing.module";

@NgModule({
  declarations: [
    MaquinaComponent,
    MaquinaFormComponent,
    MaquinaListaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaquinaRoutingModule,
  ],
})
export class MaquinaModule { }
