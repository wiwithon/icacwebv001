import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasComponent } from './consultas.component';



@NgModule({
  declarations: [
    ConsultasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ConsultasComponent]
})
export class ConsultasModule { }
