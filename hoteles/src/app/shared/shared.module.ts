import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarClientComponent } from './navbar-client/navbar-client.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';


@NgModule({
  declarations: [


    NavbarComponent,
      NavbarClientComponent,
      NavbarAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavbarComponent,NavbarClientComponent,NavbarAdminComponent]
})
export class SharedModule { }

