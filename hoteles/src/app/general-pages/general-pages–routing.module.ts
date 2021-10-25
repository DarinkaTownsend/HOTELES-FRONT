import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { GeneralPagesComponent } from './general-pages.component';



const routes: Routes = [
  {path:"", component:GeneralPagesComponent,
  children:[

]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GeneralPagesRoutingModule { }
