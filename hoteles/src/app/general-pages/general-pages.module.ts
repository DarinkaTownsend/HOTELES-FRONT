import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';


import { GeneralPagesRoutingModule } from './general-pages–routing.module';
import { GeneralPagesComponent } from './general-pages.component';
import { SharedModule } from '../shared/shared.module';


import {IvyCarouselModule} from 'angular-responsive-carousel';
import {ReactiveFormsModule} from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IngresoComponent } from './ingreso/ingreso.component';

@NgModule({
  declarations: [GeneralPagesComponent, InicioComponent, IngresoComponent,],
  imports: [
    CommonModule,
    FormsModule,
    GeneralPagesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    IvyCarouselModule,

    NgbModule
  ]
})
export class GeneralPagesModule { }
