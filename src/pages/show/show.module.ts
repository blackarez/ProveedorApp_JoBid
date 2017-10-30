import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPage } from './show';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    ShowPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVVePnunpdeDdD9fUNbLwYALneSYy2NPg'  
    })
  ],
})
export class ShowPageModule {}
