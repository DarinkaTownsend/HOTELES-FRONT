import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { ReportesComponent } from './reportes/reportes.component';



import { AdminPagesComponent } from './admin-pages.component'


const routes: Routes = [
  {path:"", component:AdminPagesComponent,
  children:[
    {path:"", component:AdministradorComponent},
    {path:"reservaciones", component:ReservacionesComponent},
    {path:"habitaciones", component:HabitacionesComponent},
    {path:"publicidad", component:PublicidadComponent},
    {path:"reportes", component:ReportesComponent}

  ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminPagesRoutingModule { }
