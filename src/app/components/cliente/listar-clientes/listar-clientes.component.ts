import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interfaces/interface';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  lista: Cliente[] | undefined = [];

  constructor (private clienteService: ClienteService) {}

  ngOnInit() {
    this.mostrarClientes();
  }

  async mostrarClientes() {
    const response = await this.clienteService.getClientes();
    if (response!==undefined) { 
      this.lista = response as Cliente[]; 
    }else{
      alert('Error al cargar los datos');
    }
  }

  async eliminarCliente(id: number | undefined) {
    const clienteAEliminar = this.lista?.find(cliente => cliente.id === id);
    if(clienteAEliminar){
      if(confirm(`¿Está seguro que desea eliminar el cliente ${clienteAEliminar.nombre} ${clienteAEliminar.apellido}?`)){
        this.clienteService.eliminarCliente(id? id : 0);
        this.lista= this.lista?.filter(cliente => cliente.id !== id); 
    }
  }
  }
}

