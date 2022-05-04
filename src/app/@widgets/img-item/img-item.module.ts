import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgItemComponent } from './img-item.component';



@NgModule({
  declarations: [
    ImgItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ImgItemComponent]
})
export class ImgItemModule { }
