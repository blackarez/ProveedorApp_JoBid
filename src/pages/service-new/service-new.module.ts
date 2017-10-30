import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceNewPage } from './service-new';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    ServiceNewPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceNewPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVVePnunpdeDdD9fUNbLwYALneSYy2NPg'  
    }),
  ],
})
export class ServiceNewPageModule {}
