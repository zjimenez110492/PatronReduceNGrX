import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store'
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import {contadorReducer} from "./contador/contador.reducer"
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      contador: contadorReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge:25, //HASTA 25 ACCIONES SE PUEDEN REGISTRAR PARA REGRESAR EN EL TIEMPO
      logOnly: environment.production //RESTRINGIR QUE CUANDO ESTE EN PRODUCCIÓN SE PUEDA ACCEDER AL HISTÓRICO
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
