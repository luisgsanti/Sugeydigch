import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Reserva } from '../../../models/reserva';
import { Cliente } from 'src/app/models/cliente';
import { Producto } from 'src/app/models/producto';
import { Servicio } from 'src/app/models/servicio';

import { ClienteService } from '../../../services/cliente.service';
import { ReservaService } from '../../../services/reserva.service';
import { ProductoService } from '../../../services/producto.service';
import { ServicioService } from 'src/app/services/servicio.service';


import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import{ DescuentosReservaComponent} from '../descuentos-reserva/descuentos-reserva.component';
import{ AcompanantesComponent} from '../acompanantes/acompanantes.component';
import{ DatosComponent} from '../datos/datos.component';

@Component({
  selector: 'app-servicios-reserva',
  templateUrl: './servicios-reserva.component.html',
  styleUrls: ['./servicios-reserva.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServiciosReservaComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private clienteService: ClienteService,
    private reservaService: ReservaService,
    private servicioService: ServicioService,
    private productoService: ProductoService,
    private formBuilder: FormBuilder
  ) { }

  registerForm: FormGroup;
  submitted = false;


  @Input() reserva: Reserva;
  servicio:Servicio;
  productos: Producto[];

  ngOnInit() {
    this.getProductos();
    this.registerForm = this.formBuilder.group({
      nombreServicio: ['',Validators.required],
      cantidad: ['',Validators.required],
    });
    this.servicio = new Servicio();
  }

  cliente: Cliente;

  Acompanantes(){
    const modalRef =  this.modalService.open(AcompanantesComponent, { size: 'xl' });
    modalRef.componentInstance.reserva = this.reserva;
    this.activeModal.close();
  }

  Descuentos(){
    const modalRef =  this.modalService.open(DescuentosReservaComponent, { size: 'xl' });
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

  getProductos(){
    this.productoService.getAll().subscribe(productos => this.productos = productos);
  }

  add() {
    this.servicio.idReserva= this.reserva.id;
    this.servicio.precio = 0;
    console.log(this.servicio);
    this.servicioService.add(this.servicio).subscribe();
    this.onReset();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
