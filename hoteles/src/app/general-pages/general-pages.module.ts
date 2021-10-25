import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';


import { GeneralPagesRoutingModule } from './general-pages–routing.module';
import { GeneralPagesComponent } from './general-pages.component';
import { SharedModule } from '../shared/shared.module';








import {ReactiveFormsModule} from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [GeneralPagesComponent, InicioComponent,],
  imports: [
    CommonModule,
    FormsModule,
    GeneralPagesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class GeneralPagesModule { }
