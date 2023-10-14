import { Component} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { cliente } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})

export class FormClienteComponent {

  formularioCliente: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    apellido: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    dni: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8), Validators.maxLength(8)]],
    fechaInicio: ['', Validators.required]
  });

  //  nombre: string = '';
  //   apellido: string = '';
  //   dni: string = '';
  //   fechaInicio: string = '';

  @Output() enviarCliente = new EventEmitter<cliente>();

  constructor(private formBuilder: FormBuilder) { }

  enviarDatos() {
    // const cliente: cliente = {
    //   nombre: this.nombre!,
    //   apellido: this.apellido!,
    //   dni: this.dni!,
    //   fechaInicio: this.fechaInicio!,
    //   id: 0
    // }

    
    if (this.formularioCliente.invalid) {
      alert('Debe completar todos los campos');
      return;
    } else {
      const cliente: cliente = {
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


