import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarseComponent } from '../Inicio/NavBar/registrarse/registrarse.component';
import { ClienteService} from '../services/cliente.service'
import { Cliente } from '../models/cliente'
import { variable } from '@angular/compiler/src/output/output_ast';
import { HabitacionService} from '../services/habitacion.service'
import { Habitacion } from '../models/habitacion'

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(private modalService: NgbModal, private clienteservice: ClienteService, private habitacionservice: HabitacionService) { }

  clientes: Cliente[];
  habitaciones: Habitacion[];

  ngOnInit() {
    this.getHabitaciones();
  }

  open(){
    //this.modalService.open(RegistrarseComponent, {centered:true});
    this.modalService.open(RegistrarseComponent, { size: 'lg' });
    //modalRef.componentInstance.docente = docente;
  }

  getClientes() {
    this.clienteservice.getAll().subscribe(clientes => this.clientes = clientes);
  }

  mostrar(){
    document.getElementById('tabla').style.width = "100%";
    document.getElementById('tabla').style.display = "block";
  }

  addHabitacion(){
    var score1 = 1;

  }

  getHabitaciones() {
    this.habitacionservice.getAll().subscribe(habitaciones => this.habitaciones = habitaciones);
  }

}
