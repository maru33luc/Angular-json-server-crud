import { Component, SimpleChanges } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

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
    console.log('Datos en app-form-cliente:', this.nombre, this.apellido, this.dni, this.fechaInicio);
    this.enviarCliente.emit(cliente);
  }
}


