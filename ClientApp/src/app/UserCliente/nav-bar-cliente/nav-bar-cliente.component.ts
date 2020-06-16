import { Component, OnInit } from '@angular/core';
import { MiCuentaClienteComponent } from '../../UserCliente/mi-cuenta-cliente/mi-cuenta-cliente.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarseComponent } from '../../Inicio/NavBar/registrarse/registrarse.component';
import { ClienteService} from '../../services/cliente.service'
import { LoginService} from '../../services/login.service'
import { Cliente } from '../../models/cliente'
import { variable } from '@angular/compiler/src/output/output_ast';
import { HabitacionService} from '../../services/habitacion.service'
import { ReservaService } from '../../services/reserva.service'
import { Habitacion } from '../../models/habitacion'
import { ModalHabitacionesComponent} from '../../Habitaciones/modal-habitaciones/modal-habitaciones.component'

import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from '../../models/reserva'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { from } from 'rxjs';
import { Servicio} from '../../models/servicio'
import { ServicioService} from '../../services/servicio.service'
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-nav-bar-cliente',
  templateUrl: './nav-bar-cliente.component.html',
  styleUrls: ['./nav-bar-cliente.component.css']
})
export class NavBarClienteComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private clienteService: ClienteService,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
  }

  x:string;
  
  
  MiCuenta(){
    this.x=sessionStorage.getItem('identificontcacion');

    this.clienteService.get(this.x).subscribe(cliente => {
      this.loginService.getLogin(this.x).subscribe(login =>{
        const modalRef= this.modalService.open(MiCuentaClienteComponent, { size: 'lg' });
        modalRef.componentInstance.cliente = cliente;
        modalRef.componentInstance.login = login;
      });
    });
  }

}
