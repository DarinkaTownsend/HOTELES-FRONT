import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatDialogModule } from '@angular/material/dialog';

import { ClientPagesRoutingModule } from './client-pages–routing.module';
import { ClientPagesComponent } from './client-pages.component';
import { SharedModule } from '../shared/shared.module';
import { ClienteInicioComponent } from './cliente-inicio/cliente-inicio.component';
//import { HeaderdosComponent } from '../shared/components/headerdos/headerdos.component'






@NgModule({
  declarations: [ClientPagesComponent, ClienteInicioComponent,

  ],
  imports: [
    CommonModule,ClientPagesRoutingModule,SharedModule
  ]
})
export class ClientPagesModule { }
