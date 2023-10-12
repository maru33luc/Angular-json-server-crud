import { ClienteService } from 'src/app/services/cliente.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent {

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  enviarCliente(cliente: any) {

    console.log(cliente);

    const agregarCliente = async (cliente: any) => {
      this.clienteService.agregarCliente(cliente);
    }
    agregarCliente(cliente);
    this.router.navigate(['/'])
  }

}

