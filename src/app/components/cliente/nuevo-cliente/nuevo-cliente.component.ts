import { ClienteService } from 'src/app/services/cliente.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { ClienteService } from '../../../services/cliente.service';


@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent {

  nombre: string = '';
  apellido: string = '';
  dni: string = '';
  fechaInicio: string = '';

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  enviarCliente() {
    const cliente = {
      nombre: this.nombre,
      apellido: this.apellido,
      dni: this.dni,
      fechaInicio: this.fechaInicio
    }
    console.log(cliente);

    const agregarCliente = async (cliente : any) => {
      this.clienteService.agregarCliente(cliente);
  }
    agregarCliente(cliente);
    this.router.navigate(['/'])
  }

}
