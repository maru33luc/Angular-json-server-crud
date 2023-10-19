import { Injectable } from '@angular/core';
import axios from 'axios';
import { Cliente } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:4000/clientes'

  constructor() { }

  async getClientes(): Promise<Cliente[] | undefined> {
    try {
      const listado = await axios(this.url);
      console.log(listado.data);
      return listado.data;
    } catch (error) {
      console.log(error);

    } return undefined;
  }

  async eliminarCliente(id: number): Promise<any> {
    try {
      const response = await axios.delete(this.url + '/' + id);
      console.log(response);
      return response;
    } catch (error) {
      alert(error);
      return error;
    }
  }

  async agregarCliente(cliente: Cliente): Promise<any> {
    // try {
    //     const response = await axios.post(this.url, cliente);
    //     console.log(response);
    //     return response;
    // } catch (error) {
    //     console.log(error);
    //     return error;
    // }

    try {
      const response = await fetch(this.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cliente)
        });
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getCliente(id: number) {
    try {
      const response = await axios.get(this.url + '/' + id);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async editarCliente(cliente: Cliente, id: number) {
    try {
      const response = await axios.put(this.url + '/' + id, cliente);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }



}
