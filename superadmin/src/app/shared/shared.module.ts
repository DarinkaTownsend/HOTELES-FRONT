import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';





@NgModule({
  declarations: [
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ToolbarComponent,]
})
export class SharedModule { }
