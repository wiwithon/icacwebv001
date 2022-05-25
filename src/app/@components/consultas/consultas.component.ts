import { Component, OnInit } from '@angular/core';
import { ColegiaturaService } from '../../servicios/colegiatura.service';
import { Habilidad } from './habilidad';
import { Factura } from './factura';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  public colegiado:Habilidad;
  public facturas:Factura[];
  public ulFactura:Factura;

  fechaHastaDondePago= new Date();
  fechaColegiaturaAbs= new Date();
  fechaActual = new Date();
  dateFrom = new Date();
  dateTo = new Date();

  term: string="";
  Nombre: string="";
  ApellidoP:string="";
  ApellidoM:string="";
  estadoH:string="";
  mesesDeuda:number = 0;

  //arreglo de meses
  meses:string[] = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ]

  constructor(private colegiaturaService:ColegiaturaService) {

   }

  ngOnInit(): void {
    
  }

  estadoHabilidad(){
    if(this.mesesDeuda<=0){
      return "- ACTIVO -"
    }
    else{
      return "- INACTIVO -" + " "+"debe"+" "+this.mesesDeuda+" "+"meses"
    }
  }
  //Calcular meses entre 2 fechas
  diferenciaMeses(dateFrom:Date, dateTo:Date) { 

    return dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear())) 
  }
  //Calcular deuda
  calcularDeuda(colegiaturaFecha:Date,verificarFacturas:Factura[]):void{
    this.dateFrom.setDate(15);
    this.dateTo.setDate(15);
    if(verificarFacturas.length ==0){
      this.fechaHastaDondePago.setDate(15);
      this.fechaHastaDondePago.setMonth(colegiaturaFecha.getMonth());
      this.fechaHastaDondePago.setFullYear(colegiaturaFecha.getFullYear());

      //Calcamos meses de deuda
      this.dateFrom.setMonth(this.fechaHastaDondePago.getMonth());
      this.dateFrom.setFullYear(this.fechaHastaDondePago.getFullYear());

      this.mesesDeuda = this.diferenciaMeses(this.dateFrom,this.dateTo);
    }
    else{
      this.fechaHastaDondePago = new Date(verificarFacturas[verificarFacturas.length-1].fechaHasta);
      //Lo obligo que sea 15
      this.fechaHastaDondePago.setDate(15);
      //Calcamos mese de deuda
      this.dateFrom.setMonth(this.fechaHastaDondePago.getMonth());
      this.dateFrom.setFullYear(this.fechaHastaDondePago.getFullYear());
      this.mesesDeuda = this.diferenciaMeses(this.dateFrom,this.dateTo);
    }
  }
  
  consultar(){
    if(this.term==""){
      this.showModal(3);
    }
    else{
      this.colegiaturaService.getColegiado(this.term).subscribe(
        (colegiado) => {
          this.colegiado = colegiado;
          if(colegiado==null){
            this.showModal(1);
          }
          else{
            let verificarFacturas:Factura[] = colegiado.facturas.filter(f =>{
              return f.cuota == 'si';
            });
  
            this.fechaColegiaturaAbs = new Date(colegiado.fechaColegiatura);
            this.calcularDeuda(this.fechaColegiaturaAbs,verificarFacturas);
            this.facturas = colegiado.facturas;
            this.showModal(2);
          }
        } 
      )
    }
    
  }
  consultarNom(){
    if(this.Nombre=="" || this.ApellidoP =="" || this.ApellidoM==""){
      this.showModal(3);
    }
    else{
      this.colegiaturaService.getColegiadoNom(this.Nombre,this.ApellidoP,this.ApellidoM).subscribe(
        (colegiado) => {
          this.colegiado = colegiado;
          if(colegiado==null){
            this.showModal(1);
          }
          else{
            let verificarFacturas:Factura[] = colegiado.facturas.filter(f =>{
              return f.cuota == 'si';
            });
  
            this.fechaColegiaturaAbs = new Date(colegiado.fechaColegiatura);
            this.calcularDeuda(this.fechaColegiaturaAbs,verificarFacturas);
            this.facturas = colegiado.facturas;
            this.showModal(2);
            // this.facturas = colegiado.facturas;
            // this.ultimaFactura();
            // this.showModal(2);
          }
        }
      )
    }
    
  }
  ultimaFactura(){
    this.ulFactura=this.facturas.pop();
  }
  showModal(valor:number){
    
    if (valor===1){
      Swal.fire({
        imageUrl: 'assets/img/icac.svg',
        imageWidth: 250,
        imageHeight: 70,
        imageAlt: 'Custom image',
        title: 'EL COLEGIADO NO EXISTE',
        text: 'contactese al 932 228460 o al correo icaciformatica@gmail.com',
        width: 650,
        padding: '2em',
        color: '#fff',
        background: '#F47F7F',
        backdrop: `
          rgba(201,139,139,0.1)
          left top
          no-repeat
        `
      })
    }
    else if(valor===2){
      Swal.fire({
        imageUrl: 'assets/img/icac.svg',
        imageWidth: 250,
        imageHeight: 70,
        title: `${this.colegiado.nombre} ${this.colegiado.apellido}`,
        //icon: 'info',
        html:
          '<table><tr><td><strong>COLEGIATURA: &nbsp;&nbsp;</td><td>'+`${this.colegiado.colegiatura}`+'</td></tr></table>'+'<hr>'+
          'Pago hasta <b style="color:#B98C00;">'+`${this.meses[this.fechaHastaDondePago.getMonth()]} - ${this.fechaHastaDondePago.getFullYear()}`+'</b> ' + '<br></br>'+
          'Siendo su habilidad <b style="color:#46FF33;">'+`${this.estadoHabilidad()}`+'</b> ' + '<br></br>'+
          '<a style="color:#FF0000;" href="http://www.cmac-cusco.com.pe/wayki-app-2020">PAGAR</a>'+
          ' cuotas atrasadas o adelantar cuotas',
        width: 650,
        padding: '2em',
        color: '#fff',
        background: '#1A1B1F',
        backdrop: `
          rgba(201,139,139,0.1)
          left top
          no-repeat
        `
      })
    }
    else{
      Swal.fire({
        icon: 'warning',
        title: 'LLENE TODOS LOS CAMPOS',
        width: 650,
        padding: '2em',
        color: '#000',
        background: '#F9FCBA',
        backdrop: `
          rgba(201,139,139,0.1)
          left top
          no-repeat
        `
      })
    }
    this.term="";
    this.Nombre="";
    this.ApellidoP="";
    this.ApellidoM="";
  }
}
