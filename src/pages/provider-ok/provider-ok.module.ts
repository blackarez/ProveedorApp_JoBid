import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderOkPage } from './provider-ok';

@NgModule({
  declarations: [
    ProviderOkPage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderOkPage),
  ],
})
export class ProviderOkPageModule {}
