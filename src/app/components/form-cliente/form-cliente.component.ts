import { Component, Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

interface cliente {
  nombre: string;
  apellido: string;
  dni: string;
  fechaInicio: string;
}

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})

export class FormClienteComponent  {
 nombre: string = '';
  apellido: string = '';
  dni: string = '';
  fechaInicio: string = '';

  @Output() enviarCliente = new EventEmitter<cliente>();

  constructor() { }

  enviarDatos() {
    const cliente: cliente = {
      nombre: this.nombre!,
      apellido: this.apellido!,
      dni: this.dni!,
      fechaInicio: this.fechaInicio!
    }
    this.enviarCliente.emit(cliente);
  }
}


