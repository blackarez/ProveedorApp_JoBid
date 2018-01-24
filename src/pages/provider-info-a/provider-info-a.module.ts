import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderInfoAPage } from './provider-info-a';

@NgModule({
  declarations: [
    ProviderInfoAPage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderInfoAPage),
  ],
})
export class ProviderInfoAPageModule { }
