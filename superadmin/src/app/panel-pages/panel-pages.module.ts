import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';


import { PanelPagesRoutingModule } from './panel-pages-routing.module';
import { PanelPagesComponent } from './panel-pages.component';
import { SharedModule } from '../shared/shared.module';


import { InicioComponent } from './inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IngresoComponent } from './ingreso/ingreso.component';
import {ReactiveFormsModule} from '@angular/forms';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PanelPagesComponent,InicioComponent, IngresoComponent,],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    PanelPagesRoutingModule,
    NgbModule,

  ]
})
export class PanelPagesModule { }
