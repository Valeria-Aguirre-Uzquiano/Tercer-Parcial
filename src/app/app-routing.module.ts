import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'pedidos',
    component: PedidosComponent    
  },
  {
    path: 'contactos',
    component: ContactosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CatalogoComponent, PedidosComponent, ContactosComponent];
