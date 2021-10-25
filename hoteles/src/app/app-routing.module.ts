import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './shared/guards/guardGeneral/check-login.guard';
import { CheckAdminGuard } from './shared/guards/guardAdmin/check-admin.guard';
import { CheckClientGuard } from './shared/guards/guardClient/check-client.guard'

//import { CheckLoginGuard } from './shared/guards/check-login.guard';



const routes: Routes = [
  { path: '',
  loadChildren: () =>
  import('./general-pages/general-pages.module').then((m) => m.GeneralPagesModule),canActivate:[CheckLoginGuard]},
  { path: 'admin',
  loadChildren: () =>
  import('./admin-pages/admin-pages.module').then((m) => m.AdminPagesModule),canActivate:[CheckAdminGuard]},
  { path: 'client',
  loadChildren: () =>
  import('./client-pages/client-pages.module').then((m) => m.ClientPagesModule),canActivate:[CheckClientGuard]}



  //{path:"", component:GeneralPagesComponent},
  //{path:"admin", component:AdminPagesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }


