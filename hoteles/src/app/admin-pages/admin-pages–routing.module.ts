import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { ReportesComponent } from './reportes/reportes.component';



import { AdminPagesComponent } from './admin-pages.component'
import { ExtenderReservaComponent } from './extender-reserva/extender-reserva.component';
import { AgregarCargosComponent } from './agregar-cargos/agregar-cargos.component';
import { CancelarReservaComponent } from './cancelar-reserva/cancelar-reserva.component';
import { CrearPublicidadComponent } from './crear-publicidad/crear-publicidad.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:"", component:AdminPagesComponent,
  children:[
    {path:"", component:AdministradorComponent},
    {path:"reservaciones", component:ReservacionesComponent},
    {path:"habitaciones", component:HabitacionesComponent},
    {path:"publicidad", component:PublicidadComponent},
    {path:"reportes", component:ReportesComponent},
    {path:"extender", component:ExtenderReservaComponent},
    {path:"cancelar", component:CancelarReservaComponent},
    {path:"agregar", component:AgregarCargosComponent},
    {path:"crear-publicidad", component:CrearPublicidadComponent},
    {path:"movimientos", component:MovimientosComponent},
    {path:"checkout", component:CheckoutComponent}



  ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminPagesRoutingModule { }
