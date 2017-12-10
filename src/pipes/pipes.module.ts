import { NgModule } from '@angular/core';
import { OrdenarPipe } from './ordenar/ordenar';
import { RemoverPipe } from './remover/remover';
import { OrdenarProveedorPipe } from './ordenar-proveedor/ordenar-proveedor';
@NgModule({
	declarations: [OrdenarPipe,
    RemoverPipe,
    OrdenarProveedorPipe],
	imports: [],
	exports: [OrdenarPipe,
    RemoverPipe,
    OrdenarProveedorPipe]
})
export class PipesModule {}
