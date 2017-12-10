import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingupPage } from './singup';
import { OrdenarPipe } from '../../pipes/ordenar/ordenar';
// import { RemoverPipe } from '../../pipes/remover/remover';

@NgModule({
  declarations: [
    SingupPage,
    OrdenarPipe,
    // RemoverPipe,
  ],
  imports: [
    IonicPageModule.forChild(SingupPage),
  ],
})
export class SingupPageModule {}
