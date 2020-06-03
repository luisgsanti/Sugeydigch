import { Pipe, PipeTransform} from '@angular/core';
import { Cliente } from "../models/cliente"
import { Reserva } from "../models/reserva"


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

/*transforme(reservas: Reserva[], buscarReserva: string) {
    if (buscarReserva == null) return reservas;
 
    return reservas.filter(reserva =>
      reserva.estado.toLowerCase().indexOf(buscarReserva.toLowerCase()) !== -1 ||
      reserva.id.toString().toLowerCase() ==buscarReserva.toLowerCase() ||
      reserva.habitaciones.toLowerCase().indexOf(buscarReserva.toLowerCase()) !== -1 ||
      reserva.idCliente.toLowerCase().indexOf(buscarReserva.toLowerCase()) !== -1 
    ); 
  }*/
