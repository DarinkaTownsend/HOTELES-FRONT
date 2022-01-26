import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminPagesRoutingModule } from './admin-pages–routing.module';
import { AdminPagesComponent } from './admin-pages.component';
import { SharedModule } from '../shared/shared.module';
import { AdministradorComponent } from './administrador/administrador.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ExtenderReservaComponent } from './extender-reserva/extender-reserva.component';
import { CancelarReservaComponent } from './cancelar-reserva/cancelar-reserva.component';
import { AgregarCargosComponent } from './agregar-cargos/agregar-cargos.component';
import { CrearPublicidadComponent } from './crear-publicidad/crear-publicidad.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { CheckoutComponent } from './checkout/checkout.component';
//import { HeaderdosComponent } from '../shared/components/headerdos/headerdos.component'

@NgModule({
  declarations: [AdminPagesComponent, AdministradorComponent, ReservacionesComponent, HabitacionesComponent, PublicidadComponent, ReportesComponent, ExtenderReservaComponent, CancelarReservaComponent, AgregarCargosComponent, CrearPublicidadComponent, MovimientosComponent, CheckoutComponent],
  imports: [CommonModule,AdminPagesRoutingModule,SharedModule,NgbModule,]
})
export class AdminPagesModule { }
