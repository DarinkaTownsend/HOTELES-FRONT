import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';



import { AdminPagesComponent } from './admin-pages.component'


const routes: Routes = [
  {path:"", component:AdminPagesComponent,
  children:[
    {path:"panel", component:AdministradorComponent},

  ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminPagesRoutingModule { }
