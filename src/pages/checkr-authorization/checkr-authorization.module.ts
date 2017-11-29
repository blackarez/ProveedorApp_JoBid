import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckrAuthorizationPage } from './checkr-authorization';

@NgModule({
  declarations: [
    CheckrAuthorizationPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckrAuthorizationPage),
  ],
})
export class CheckrAuthorizationPageModule {}
