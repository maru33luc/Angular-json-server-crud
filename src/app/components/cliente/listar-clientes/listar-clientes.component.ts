import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { cliente } from 'src/app/interfaces/interface';


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
    if (response) { 
      this.lista = response as cliente[]; 
      
    }
  }

  async eliminarCliente(id: number) {
    this.clienteService.eliminarCliente(id);
    this.lista = this.lista.filter(cliente => cliente.id !== id);
  }

}

