import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckrWelcomePage } from './checkr-welcome';

@NgModule({
  declarations: [
    CheckrWelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(CheckrWelcomePage),
  ],
})
export class CheckrWelcomePageModule {}
