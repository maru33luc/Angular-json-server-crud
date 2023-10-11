import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url='http://localhost:4000/clientes'

  constructor() {}

  async getClientes() {
    try {
      const listado = await axios(this.url);
      console.log(listado.data);
      return listado.data;
  } catch (error) {
      console.log(error);
      return error;
  }
}

async eliminarCliente(id: number) {
  try {
      const response = await axios.delete(this.url + '/' + id);
      console.log(response);
      return response;
  } catch (error) {
      console.log(error);
      return error;
  }
}

async agregarCliente(cliente: any) {
  try {
      const response = await axios.post(this.url, cliente);
      console.log(response);
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

async editarCliente(cliente: any, id: number) {
  try {
      const response = await axios.put(this.url + '/' + id, cliente);
      console.log(response);
      return response;
  } catch (error) {
      console.log(error);
      return error;
  }
}



}
