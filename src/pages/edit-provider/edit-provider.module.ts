import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProviderPage } from './edit-provider';
import { OrdenarProveedorPipe } from '../../pipes/ordenar-proveedor/ordenar-proveedor';
// import { RemoverPipe } from '../../pipes/remover/remover';

@NgModule({
  declarations: [
    EditProviderPage,
    OrdenarProveedorPipe,
    // RemoverPipe,
  ],
  imports: [
    IonicPageModule.forChild(EditProviderPage),
  ],
})
export class EditProviderPageModule {}
