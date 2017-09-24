import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceSalePage } from './service-sale';

@NgModule({
  declarations: [
    ServiceSalePage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceSalePage),
  ],
})
export class ServiceSalePageModule {}
