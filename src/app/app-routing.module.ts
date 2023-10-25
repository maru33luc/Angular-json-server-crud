import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClientePageComponent } from './pages/home-cliente-page/home-cliente-page.component';
import { NuevoClientePageComponent } from './pages/nuevo-cliente-page/nuevo-cliente-page.component';
import { EditarClientePageComponent } from './pages/editar-cliente-page/editar-cliente-page.component';

const routes: Routes = [
  { path: '', component: HomeClientePageComponent },
  { path: 'nuevo-cliente', component: NuevoClientePageComponent },
  { path: 'editar-cliente/:id', component: EditarClientePageComponent },
  {path: "**", redirectTo: "", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
