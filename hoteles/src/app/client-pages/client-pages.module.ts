import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatDialogModule } from '@angular/material/dialog';

import { ClientPagesRoutingModule } from './client-pages–routing.module';
import { ClientPagesComponent } from './client-pages.component';
import { SharedModule } from '../shared/shared.module';
import { ClienteInicioComponent } from './cliente-inicio/cliente-inicio.component';
import { PuntuarComponent } from './puntuar/puntuar.component';
import { MisReservacionesComponent } from './mis-reservaciones/mis-reservaciones.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ContactoCComponent } from './contacto-c/contacto-c.component';
import { CuentaComponent } from './cuenta/cuenta.component';
//import { HeaderdosComponent } from '../shared/components/headerdos/headerdos.component'






@NgModule({
  declarations: [ClientPagesComponent, ClienteInicioComponent, PuntuarComponent, MisReservacionesComponent, FacturasComponent, ContactoCComponent, CuentaComponent,

  ],
  imports: [
    CommonModule,ClientPagesRoutingModule,SharedModule
  ]
})
export class ClientPagesModule { }
