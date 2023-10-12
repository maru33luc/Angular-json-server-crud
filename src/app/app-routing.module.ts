import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoClienteComponent } from './components/cliente/nuevo-cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { HomeClientePageComponent } from './pages/home-cliente-page/home-cliente-page.component';

const routes: Routes = [
  { path: '', component: HomeClientePageComponent },
  { path: 'nuevo-cliente', component: NuevoClienteComponent },
  { path: 'editar-cliente/:id', component: EditarClienteComponent },
  {path: "**", redirectTo: "", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
