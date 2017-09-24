import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPaymentMethodPage } from './add-payment-method';

@NgModule({
  declarations: [
    AddPaymentMethodPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPaymentMethodPage),
  ],
})
export class AddPaymentMethodPageModule {}
