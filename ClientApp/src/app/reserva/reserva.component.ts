import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarseComponent } from '../Inicio/NavBar/registrarse/registrarse.component';
import { ClienteService} from '../services/cliente.service'
import { Cliente } from '../models/cliente'
import { variable } from '@angular/compiler/src/output/output_ast';
import { HabitacionService} from '../services/habitacion.service'
import { ReservaService } from '../services/reserva.service'
import { Habitacion } from '../models/habitacion'

import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from '../models/reserva'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(private modalService: NgbModal, private clienteservice: ClienteService, 
    private habitacionservice: HabitacionService, private formBuilder: FormBuilder,
    private reservaSercive: ReservaService) { }

  clientes: Cliente[];
  habitaciones: Habitacion[];
  reserva: Reserva;

  ngOnInit() {
    this.getHabitaciones();
    this.registerForm = this.formBuilder.group({
      fechaIngreso: ['',Validators.required],
      fechaSalida: ['',Validators.required],
      habitaciones:  ['', Validators.required], 
    });

    this.reserva = new Reserva();
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



  registerForm: FormGroup;
  submitted = false;

  add(id: string) {
    this.reserva.estado = "ACTIVA";
    this.reserva.idCliente = id;

    alert(this.reserva.fechaIngreso);
    alert(this.reserva.fechaSalida);
    alert(this.reserva.habitaciones);

    
    this.reservaSercive.add(this.reserva).subscribe();
    this.onReset();
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(id: string) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.add(id);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
