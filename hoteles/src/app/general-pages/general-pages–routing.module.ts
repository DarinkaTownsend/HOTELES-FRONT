import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralPagesComponent } from './general-pages.component';

import { InicioComponent } from './inicio/inicio.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ServiciosComponent } from './servicios/servicios.component';





const routes: Routes = [
  {path:"", component:GeneralPagesComponent,
  children:[
    {path:"", component:InicioComponent},
    {path:"inicio", component:InicioComponent},
    {path:"ingreso", component:IngresoComponent},
    {path:"consultar", component:ConsultaComponent},
    {path:"reservar", component:ReservaComponent},
    {path:"confirmar", component:ConfirmacionComponent},
    {path:"contacto", component:ContactosComponent},
    {path:"servicios", component:ServiciosComponent}







  ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GeneralPagesRoutingModule { }
