import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientPagesComponent } from './client-pages.component';
import { ClienteInicioComponent } from './cliente-inicio/cliente-inicio.component';
import { ContactoCComponent } from './contacto-c/contacto-c.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { FacturasComponent } from './facturas/facturas.component';
import { MisReservacionesComponent } from './mis-reservaciones/mis-reservaciones.component';
import { PuntuarComponent } from './puntuar/puntuar.component';
import { ConsultarClientComponent } from './consultar-client/consultar-client.component';
import { ReservarClientComponent } from './reservar-client/reservar-client.component';
import { ConfirmarClientComponent } from './confirmar-client/confirmar-client.component';


const routes: Routes = [
  {path:"", component:ClientPagesComponent,
  children:[
    {path:"inicio", component:ClienteInicioComponent},
    {path:"contactos", component:ContactoCComponent},
    {path:"cuenta", component:CuentaComponent},
    {path:"facturas", component:FacturasComponent},
    {path:"reservaciones", component:MisReservacionesComponent},
    {path:"puntuacion", component:PuntuarComponent},
    {path:"consultarc", component:ConsultarClientComponent},
    {path:"reservarc", component:ReservarClientComponent},
    {path:"confirmarc", component:ConfirmarClientComponent}

  ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientPagesRoutingModule { }
