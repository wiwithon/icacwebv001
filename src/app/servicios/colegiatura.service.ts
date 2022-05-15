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
    console.log('el servicio esta funcionando');
  }
  /*getColegiados(){
    let heades = new HttpHeaders().set('Content-Type','aplication/json')
    return this.http.get(this.url, {headers :heades});
  }*/
  getColegiado(term:string):Observable<Habilidad>{
    return this.http.get<Habilidad>(this.url+`dxy1spv0/${term}`);
  }
}
