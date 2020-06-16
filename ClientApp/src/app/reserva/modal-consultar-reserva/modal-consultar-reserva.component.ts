import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../models/reserva';
import { ReservaService} from '../../services/reserva.service'

@Component({
  selector: 'app-modal-consultar-reserva',
  templateUrl: './modal-consultar-reserva.component.html',
  styleUrls: ['./modal-consultar-reserva.component.css']
})
export class ModalConsultarReservaComponent implements OnInit {

  constructor(
    private reservaService: ReservaService,
  ) { }

  reservas: Reserva[];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.reservaService.getReservasActivas().subscribe(reservas => this.reservas = reservas);
  }

}
