import { Component, OnInit } from '@angular/core';
import { ColegiaturaService } from '../../servicios/colegiatura.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  public colegiados:Array<any>=[]
  constructor(private colegiaturaService:ColegiaturaService) {
    this.colegiaturaService.getColegiados().subscribe((resp: any)=>{
      console.log(resp);
      this.colegiados=resp;
    })
   }

  ngOnInit(): void {
  }

}
