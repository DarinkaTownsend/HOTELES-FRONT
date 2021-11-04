import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelPagesComponent } from './panel-pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { IngresoComponent } from './ingreso/ingreso.component';


const routes: Routes = [
  {path:"", component:PanelPagesComponent,
  children:[
    {path:"", component:IngresoComponent},
    {path:"ingreso", component:IngresoComponent},
    {path:"inicio", component:InicioComponent},

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PanelPagesRoutingModule { }
