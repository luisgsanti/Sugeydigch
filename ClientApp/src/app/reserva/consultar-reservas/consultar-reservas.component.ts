import { Component, OnInit } from '@angular/core';
import { ReservaService} from '../../services/reserva.service'
import { Reserva } from '../../models/reserva'
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-consultar-reservas',
  templateUrl: './consultar-reservas.component.html',
  styleUrls: ['./consultar-reservas.component.css'],
})

export class ConsultarReservasComponent implements OnInit {

  reserva$: Observable<Reserva[]>;
  filter = new FormControl('');

  constructor( private reservaSerice: ReservaService) {}

   reservas: Reserva[];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.reservaSerice.getAll().subscribe(reservas => this.reservas = reservas);
  }
 
}
/*
reservaSerice: ReservaService;

const reservas: Reserva[] = [this.reservaSerice.getAll().subscribe(reservas => this.reservas = reservas)];

function search(text: string, pipe: PipeTransform): Reserva[] {
  return reservas.filter(reserva => {
    const term = text.toLowerCase();
    return reserva.idCliente.toLowerCase().includes(term)
        || pipe.transform(reserva.habitaciones).includes(term)
        || pipe.transform(reserva.fechaIngreso).includes(term)
        || pipe.transform(reserva.fechaSalida).includes(term);
  });
}*/


