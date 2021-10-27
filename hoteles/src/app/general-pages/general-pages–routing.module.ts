import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { GeneralPagesComponent } from './general-pages.component';

import { InicioComponent } from './inicio/inicio.component';
import { IngresoComponent } from './ingreso/ingreso.component';


const routes: Routes = [
  {path:"", component:GeneralPagesComponent,
  children:[
    {path:"", component:InicioComponent},
    {path:"inicio", component:InicioComponent},
    {path:"ingreso", component:IngresoComponent},


  ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GeneralPagesRoutingModule { }
