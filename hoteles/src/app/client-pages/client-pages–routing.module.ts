import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPagesComponent } from './client-pages.component';



const routes: Routes = [
  {path:"", component:ClientPagesComponent,
  children:[


  ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientPagesRoutingModule { }
