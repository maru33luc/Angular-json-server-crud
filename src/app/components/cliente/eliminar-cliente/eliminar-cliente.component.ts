import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent {

  constructor(private clienteService: ClienteService) { }

  async eliminarCliente(id: number): Promise<void> {
    this.clienteService.eliminarCliente(id);
  }
}
