import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
   SpinnerComponent,
   SideBarComponent,


  ]
})
export class SharedModule { }
