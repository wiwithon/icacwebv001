import { Factura } from "./factura";

export class Habilidad {
    id: number;
    colegiatura:string;
    apellido:string;
    nombre:string;
    dni:string;

    facturas:Factura[]=[];
}