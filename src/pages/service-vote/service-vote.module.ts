import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceVotePage } from './service-vote';

@NgModule({
  declarations: [
    ServiceVotePage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceVotePage),
  ],
})
export class ServiceVotePageModule {}
