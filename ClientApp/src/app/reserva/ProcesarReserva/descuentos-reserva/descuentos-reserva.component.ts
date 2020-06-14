import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from '../../../models/reserva';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from '../../../services/cliente.service'
import { ReservaService } from '../../../services/reserva.service'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import{ ServiciosReservaComponent} from '../servicios-reserva/servicios-reserva.component'
import{ AcompanantesComponent} from '../acompanantes/acompanantes.component'
import{ DatosComponent} from '../datos/datos.component'
import{ FacturaReservaComponent} from '../factura-reserva/factura-reserva.component'


@Component({
  selector: 'app-descuentos-reserva',
  templateUrl: './descuentos-reserva.component.html',
  styleUrls: ['./descuentos-reserva.component.css']
})
export class DescuentosReservaComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private clienteService: ClienteService,
    private reservaService: ReservaService,
  ) { }

  @Input() reserva: Reserva;
  ngOnInit() {
  }

  cliente: Cliente;

  Acompanantes(){
    const modalRef =  this.modalService.open(AcompanantesComponent, { size: 'xl' });
    modalRef.componentInstance.reserva = this.reserva;
    this.activeModal.close();
  }

  Servicios(){
    const modalRef =  this.modalService.open(ServiciosReservaComponent, { size: 'xl' });
    modalRef.componentInstance.reserva = this.reserva;
    this.activeModal.close();
  }

  Datos(){
    this.clienteService.get(this.reserva.idCliente).subscribe(clientee => {
      this.cliente = clientee;
      const modalRef =  this.modalService.open(DatosComponent, { size: 'xl' });
      modalRef.componentInstance.reserva = this.reserva;
      modalRef.componentInstance.cliente = clientee;
    });
    this.activeModal.close();
  }

  Facturar(){
    this.clienteService.get(this.reserva.idCliente).subscribe(clientee => {
      this.cliente = clientee;
      const modalRef =  this.modalService.open(FacturaReservaComponent, { size: 'xl' });
      modalRef.componentInstance.reserva = this.reserva;
      modalRef.componentInstance.cliente = clientee;
    });
  }

}
