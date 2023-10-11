import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { EliminarClienteComponent } from './components/cliente/eliminar-cliente/eliminar-cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { NuevoClienteComponent } from './components/cliente/nuevo-cliente/nuevo-cliente.component';
import { NavBarComponent } from './components/cliente/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    EliminarClienteComponent,
    EditarClienteComponent,
    NuevoClienteComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
