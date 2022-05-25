import {Injectable}from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class SpinnerService{
    cargando=new Subject<boolean>();

    show():void{
        this.cargando.next(true);
    }
    hide():void{
        this.cargando.next(false);
    }
}