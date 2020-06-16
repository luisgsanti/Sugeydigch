import { Component, OnInit } from '@angular/core';
import { ReservaService} from '../../services/reserva.service'
import { ClienteService} from '../../services/cliente.service'
import { Reserva } from '../../models/reserva'
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosComponent} from '../ProcesarReserva/datos/datos.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { RegistrarseComponent} from '../../Inicio/NavBar/registrarse/registrarse.component'
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-consultar-reservas',
  templateUrl: './consultar-reservas.component.html',
  styleUrls: ['./consultar-reservas.component.css'],
})

export class ConsultarReservasComponent implements OnInit {

  reserva$: Observable<Reserva[]>;
  filter = new FormControl('');

  constructor( 
    private reservaSerice: ReservaService, 
    private _router: Router, 
    private modalService: NgbModal,
    private clienteService: ClienteService
    ) {}

   reservas: Reserva[];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.reservaSerice.getAll().subscribe(reservas => this.reservas = reservas);
  }

  cliente: Cliente;

  procesarReserva(reserva: Reserva){
    this.clienteService.get(reserva.idCliente).subscribe(clientee => {
      this.cliente = clientee;
      const modalRef =  this.modalService.open(DatosComponent, { size: 'xl' });
      modalRef.componentInstance.reserva = reserva;
      modalRef.componentInstance.cliente = clientee;
      setTimeout(()=> {
        
      },1300)
    });
  }

  delete(reserva: Reserva): void {
    reserva.estado="CANCELADA";
    this.reservaSerice.cambiarEstato(reserva).subscribe(() => this.getAll());
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


