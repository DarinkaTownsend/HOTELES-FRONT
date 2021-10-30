import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarClientComponent } from './navbar-client/navbar-client.component';


@NgModule({
  declarations: [


    NavbarComponent,
      NavbarClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavbarComponent,NavbarClientComponent]
})
export class SharedModule { }

