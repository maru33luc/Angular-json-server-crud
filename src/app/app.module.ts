import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { EliminarClienteComponent } from './components/cliente/eliminar-cliente/eliminar-cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { NuevoClienteComponent } from './components/cliente/nuevo-cliente/nuevo-cliente.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HomeClientePageComponent } from './pages/home-cliente-page/home-cliente-page.component';
import { NuevoClientePageComponent } from './pages/nuevo-cliente-page/nuevo-cliente-page.component';
import { EditarClientePageComponent } from './pages/editar-cliente-page/editar-cliente-page.component';
import { FormClienteComponent } from './components/cliente/form-cliente/form-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    EliminarClienteComponent,
    EditarClienteComponent,
    NuevoClienteComponent,
    NavBarComponent,
    HomeClientePageComponent,
    NuevoClientePageComponent,
    EditarClientePageComponent,
    FormClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
