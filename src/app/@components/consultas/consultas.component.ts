import { Component, OnInit } from '@angular/core';
import { ColegiaturaService } from '../../servicios/colegiatura.service';
import { Habilidad } from './habilidad';
import { Factura } from './factura';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  public colegiado:Habilidad;
  public facturas:Factura[];
  term: string="";

  constructor(private colegiaturaService:ColegiaturaService) {

   }

  ngOnInit(): void {
  }

  consultar(){
    this.colegiaturaService.getColegiado(this.term).subscribe(
      (colegiado) => {
        this.colegiado = colegiado;
        this.facturas = colegiado.facturas;
        //console.log(this.colegiado);
      }
    )
  }

}
