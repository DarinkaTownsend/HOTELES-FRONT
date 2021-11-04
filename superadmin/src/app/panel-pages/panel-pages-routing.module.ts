import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelPagesComponent } from './panel-pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { MisHotelesComponent } from './mis-hoteles/mis-hoteles.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearComponent } from './crear/crear.component';
import { PerfilComponent } from './perfil/perfil.component';






const routes: Routes = [
  {path:"", component:PanelPagesComponent,
  children:[
    {path:"", component:IngresoComponent},
    {path:"ingreso", component:IngresoComponent},
    {path:"inicio", component:InicioComponent},
    {path:"hoteles", component:MisHotelesComponent},
    {path:"reportes", component:ReportesComponent},
    {path:"crear", component:CrearComponent},
    {path:"perfil", component:PerfilComponent},





    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PanelPagesRoutingModule { }
