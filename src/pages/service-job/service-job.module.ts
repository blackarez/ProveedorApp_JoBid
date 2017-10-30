import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceJobPage } from './service-job';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    ServiceJobPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceJobPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVVePnunpdeDdD9fUNbLwYALneSYy2NPg'  
    }),
  ],
})
export class ServiceJobPageModule {}

