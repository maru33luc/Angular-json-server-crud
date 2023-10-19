import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})

export class FormClienteComponent {

  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Input() dni: string = '';
  @Input() fechaInicio: string = '';

  formularioCliente: FormGroup = this.formBuilder.group({

    nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    apellido: ['d', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    dni: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8), Validators.maxLength(8)]],
    fechaInicio: ['', Validators.required]
  });

  @Output() enviarCliente = new EventEmitter<Cliente>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges() {
    if (this.nombre && this.apellido && this.dni && this.fechaInicio) {
      this.formularioCliente.controls['nombre'].setValue(this.nombre);
      this.formularioCliente.controls['apellido'].setValue(this.apellido);
      this.formularioCliente.controls['dni'].setValue(this.dni);
      this.formularioCliente.controls['fechaInicio'].setValue(this.fechaInicio);
    }
  }

  enviarDatos() {

    if (this.formularioCliente.invalid) {
      alert('Debe completar todos los campos');
      return;
    } else {
      const cliente: Cliente = {
        nombre: this.formularioCliente.controls['nombre'].value,
        apellido: this.formularioCliente.controls['apellido'].value,
        dni: this.formularioCliente.controls['dni'].value,
        fechaInicio: this.formularioCliente.controls['fechaInicio'].value,
        id: 0
      }
      this.enviarCliente.emit(cliente);
    }
  }
}


