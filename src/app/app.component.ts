import { Component } from '@angular/core';
// import { ColegiaturaService } from './servicios/colegiatura.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'icacwebv001';
  // public colegiados:Array<any>=[]
  constructor( ){
    //private colegiaturaService:ColegiaturaService
    // this.colegiaturaService.getColegiados().subscribe((resp: any)=>{
    //   this.colegiados=resp;
    // })
  }
}
