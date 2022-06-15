import { Component } from '@angular/core';
import { SpinnerService } from '../../../servicios/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
  <div class="overlay" *ngIf="cargando | async">
  <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>`,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent{
  cargando=this.spinnerService.cargando;
  constructor(private spinnerService:SpinnerService) { }


}
