import { NgModule } from '@angular/core';
import { ButtonsTableComponent } from './buttons-table/buttons-table.component';

@NgModule({
  declarations: [
    ButtonsTableComponent
  ],
  exports: [
    ButtonsTableComponent
  ]
})
export class SharedModule { }