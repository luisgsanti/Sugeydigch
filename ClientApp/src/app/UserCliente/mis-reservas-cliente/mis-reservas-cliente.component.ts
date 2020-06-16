import { Component, OnInit } from '@angular/core';
import { ReservaService} from '../../services/reserva.service'
import { ClienteService} from '../../services/cliente.service'
import { Reserva } from '../../models/reserva'
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { RegistrarseComponent} from '../../Inicio/NavBar/registrarse/registrarse.component'
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-mis-reservas-cliente',
  templateUrl: './mis-reservas-cliente.component.html',
  styleUrls: ['./mis-reservas-cliente.component.css']
})
export class MisReservasClienteComponent implements OnInit {

  constructor(
    private reservaSerice: ReservaService, 
    ) { }

    reservas: Reserva[];

  ngOnInit() {
    this.getAll();
  }

  x:string;

  getAll() {
    this.x=sessionStorage.getItem('identificontcacion');
    this.reservaSerice.getMisReservas(this.x).subscribe(reservas => this.reservas = reservas);
  }

}
