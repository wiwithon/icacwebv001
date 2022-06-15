import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../@components/consultas/habilidad';

@Injectable({
  providedIn: 'root'
})
export class ColegiaturaService {
  url= 'https://prueba-back-abogados.herokuapp.com/api/';

  constructor(private http: HttpClient) { 
  }
  getColegiado(term:string):Observable<Habilidad>{
    return this.http.get<Habilidad>(this.url+`dxy1spv0/${term}`);
  }
  getColegiadoNom(nombre:string, apellidoP:string, apellidoM:string):Observable<Habilidad>{
    return this.http.get<Habilidad>(this.url+`d2y3sñvx/${nombre}/${apellidoP} ${apellidoM}`);
  }
}
