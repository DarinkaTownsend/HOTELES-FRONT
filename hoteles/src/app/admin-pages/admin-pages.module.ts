import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminPagesRoutingModule } from './admin-pages–routing.module';
import { AdminPagesComponent } from './admin-pages.component';
import { SharedModule } from '../shared/shared.module';
import { AdministradorComponent } from './administrador/administrador.component';
//import { HeaderdosComponent } from '../shared/components/headerdos/headerdos.component'

@NgModule({
  declarations: [AdminPagesComponent, AdministradorComponent],
  imports: [CommonModule,AdminPagesRoutingModule,SharedModule,NgbModule,]
})
export class AdminPagesModule { }
