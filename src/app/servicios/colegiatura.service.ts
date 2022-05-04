import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColegiaturaService {
  url= 'https://prueba-back-abogados.herokuapp.com/api/dxy1spv0/8'
  constructor(private http: HttpClient) { 
    console.log('el servicio esta funcionando');
  }
  getColegiados(){
    let heades = new HttpHeaders().set('Content-Type','aplication/json')
    return this.http.get(this.url, {headers :heades});
  }
}
