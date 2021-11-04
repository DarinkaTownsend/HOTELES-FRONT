import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { UsuariosService } from './service/usuarios.service';




const routes: Routes = [
  {path:"", component:IngresoComponent,
  children:[
    {path:"", component:IngresoComponent},
    {path:"inicio", component:InicioComponent},
    {path:"ingreso", component:IngresoComponent},






  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
