import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientPagesComponent } from './client-pages.component';
import { ClienteInicioComponent } from './cliente-inicio/cliente-inicio.component';



const routes: Routes = [
  {path:"", component:ClientPagesComponent,
  children:[
    {path:"", component:ClienteInicioComponent},
  ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientPagesRoutingModule { }
