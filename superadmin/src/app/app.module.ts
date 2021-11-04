import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { IngresoComponent } from './ingreso/ingreso.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosService } from './service/usuarios.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SharedModule,FormsModule,
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
