import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '',
  loadChildren: () =>
  import('./panel-pages/panel-pages.module').then((m) => m.PanelPagesModule)}
];
//cambio :v
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
