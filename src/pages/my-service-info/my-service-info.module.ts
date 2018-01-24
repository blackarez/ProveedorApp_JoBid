import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyServiceInfoPage } from './my-service-info';

@NgModule({
  declarations: [
    MyServiceInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MyServiceInfoPage),
  ],
})
export class MyServiceInfoPageModule { }
