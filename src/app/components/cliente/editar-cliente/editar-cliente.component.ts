import { Cliente } from 'src/app/interfaces/interface';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {

  nombre: string = '';
  apellido: string = '';
  dni: string = '';
  fechaInicio: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) {
    this.route.params.subscribe(async (params) => {
      const clienteId = params['id'];

      try {
        const response = await this.clienteService.getCliente(clienteId);

        if (response) {
          this.nombre = response.nombre;
          this.apellido = response.apellido;
          this.dni = response.dni;
          this.fechaInicio = response.fechaInicio;
        }
      } catch (error) {
        console.error('Error al obtener el cliente:', error);
      }

    });
  }

  actualizarCliente(cliente: Cliente) {
    const editarCliente = async (cliente: any) => {
      this.clienteService.editarCliente(cliente, this.route.snapshot.params['id']);
    }
    editarCliente(cliente);
    this.router.navigate(['/'])
  }
}








