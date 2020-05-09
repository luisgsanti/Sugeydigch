import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from "../models/cliente"


@Pipe({
  name: 'clineteFiltro'
})
export class ClineteFiltroPipe implements PipeTransform {

  transform(clientes: Cliente[], searchText: string) {
    if (searchText == null) return clientes;
    return clientes.filter(cliente =>
      cliente.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      cliente.id.toString().toLowerCase() ==searchText.toLowerCase() ||
      cliente.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      cliente.apellido.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 
    );
  }

}
