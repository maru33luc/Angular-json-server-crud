import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { EliminarClienteComponent } from '../eliminar-cliente/eliminar-cliente.component';  


interface cliente {
  apellido: string;
  nombre: string;
  dni: string;
  fechaInicio: string;
  id: number;
}

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent {

  lista: cliente[] = [];

  constructor (private clienteService: ClienteService) {
      this.mostrarClientes();
    }

  async mostrarClientes() {
    const response = await this.clienteService.getClientes();
    console.log(response);
    if (response) { 
      this.lista = response as cliente[]; 
      console.log(this.lista);
    }
  }

  async eliminarCliente(id: number) {
    this.clienteService.eliminarCliente(id);
    this.lista = this.lista.filter(cliente => cliente.id !== id);
  }

  // async editarCliente(id: number) {
  //   console.log(id);
    
  // }
}

