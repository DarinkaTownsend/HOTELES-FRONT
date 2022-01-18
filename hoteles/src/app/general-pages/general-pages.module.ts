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
import { ConsultaComponent } from './consulta/consulta.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PaqueteOceanoComponent } from './paquete-oceano/paquete-oceano.component';
import { PaqueteFamiliarComponent } from './paquete-familiar/paquete-familiar.component';
import { PaqueteParejaComponent } from './paquete-pareja/paquete-pareja.component';
import { CheckoutTurismoComponent } from './checkout-turismo/checkout-turismo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
  declarations: [GeneralPagesComponent, InicioComponent, IngresoComponent, ConsultaComponent, ReservaComponent, ConfirmacionComponent, ContactosComponent, ServiciosComponent, PaqueteOceanoComponent, PaqueteFamiliarComponent, PaqueteParejaComponent, CheckoutTurismoComponent, NosotrosComponent,],
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
