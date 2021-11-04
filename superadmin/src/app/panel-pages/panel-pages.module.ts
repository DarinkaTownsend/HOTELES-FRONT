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
import { MisHotelesComponent } from './mis-hoteles/mis-hoteles.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearComponent } from './crear/crear.component';
import { PerfilComponent } from './perfil/perfil.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PanelPagesComponent,InicioComponent, IngresoComponent, MisHotelesComponent, ReportesComponent, CrearComponent, PerfilComponent,],
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
