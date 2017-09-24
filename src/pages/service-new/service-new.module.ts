import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceNewPage } from './service-new';

@NgModule({
  declarations: [
    ServiceNewPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceNewPage),
  ],
})
export class ServiceNewPageModule {}
