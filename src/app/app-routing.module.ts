import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoClienteComponent } from './components/cliente/nuevo-cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';

const routes: Routes = [
  { path: '', component: ListarClientesComponent },
  { path: 'nuevo-cliente', component: NuevoClienteComponent },
  { path: 'editar-cliente/:id', component: EditarClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
