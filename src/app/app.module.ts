import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import modules
import { ConsultasModule } from './@components/consultas/consultas.module';
import { FooterModule } from './@components/footer/footer.module';
import { NavbarModule } from './@components/navbar/navbar.module';
import { PagosModule } from './@components/pagos/pagos.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConsultasComponent } from './@components/consultas/consultas.component';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
// inport interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    ConsultasModule,
    FooterModule,
    NavbarModule,
    PagosModule,
    HttpClientModule,
    FormsModule,
    SpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:SpinnerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
