import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarseComponent } from '../Inicio/NavBar/registrarse/registrarse.component';
import { ClienteService} from '../services/cliente.service'
import { Cliente } from '../models/cliente'
import { variable } from '@angular/compiler/src/output/output_ast';
import { HabitacionService} from '../services/habitacion.service'
import { ReservaService } from '../services/reserva.service'
import { Habitacion } from '../models/habitacion'
import { ModalHabitacionesComponent} from '../Habitaciones/modal-habitaciones/modal-habitaciones.component'

import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from '../models/reserva'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { from } from 'rxjs';
import { Servicio} from '../models/servicio'
import { ServicioService} from '../services/servicio.service'
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
     private clienteservice: ClienteService, 
    private habitacionservice: HabitacionService, 
    private formBuilder: FormBuilder,
    private reservaSercive: ReservaService,
    private servicioService: ServicioService,
    ) { }

  clientes: Cliente[];
  habitaciones: Habitacion[];
  reserva: Reserva;

  servicio: Servicio;

  FechaActual:Date;
  

  ngOnInit() {
    this.getHabitaciones();
    this.registerForm = this.formBuilder.group({
      fechaIngreso: ['',Validators.required],
      fechaSalida: ['',Validators.required],
      habitaciones:  ['', Validators.required], 
    });

    this.reserva = new Reserva();

    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    alert(date);
  }

  open(){
    //this.modalService.open(RegistrarseComponent, {centered:true});
    this.modalService.open(RegistrarseComponent, { size: 'lg' });
    //modalRef.componentInstance.docente = docente;
  }

  getClientes() {
    this.clienteservice.getAll().subscribe(clientes => this.clientes = clientes);
  }

  getHabitaciones() {
    this.habitacionservice.getAll().subscribe(habitaciones => this.habitaciones = habitaciones);
  }

  registerForm: FormGroup;
  submitted = false;

  fechas(): number{
    var fecha1 = new Date(this.reserva.fechaIngreso);
    var fecha2 = new Date(this.reserva.fechaSalida);

    if(fecha2.getTime()<=fecha1.getTime()){
      return null
    }else{
      var diferencia = Math.abs(fecha2.getTime()-fecha1.getTime());
      console.log("diferencia", diferencia);
      var dias= (diferencia/(1000*60*60*24));
      console.log("dias", dias);
      return dias;
    }
  }

  reservas: Reserva[];

  add(id: string) {
    
    var dias=this.fechas();
    if(dias != null){
      //alert(dias.toString());
    }

    var confirmar:boolean;
    var habitacion = this.reserva.habitaciones;
    var Fecha1 = new Date(this.reserva.fechaIngreso);
    var Fecha2 = new Date(this.reserva.fechaSalida);

    
      this.reservaSercive.getAll().subscribe(reservas => {
        this.reservas = reservas
        var x=0;
        this.reservas.forEach(item => {
          if(item.estado=="ACTIVA"){
            if(item.habitaciones==habitacion){
              var Reserva1 = new Date(item.fechaIngreso);
              var Reserva2 = new Date(item.fechaSalida);
              if(Fecha1.getTime()>Reserva1.getTime() && Fecha1.getTime()<Reserva2.getTime()){
                x=x+1;
              }else{
                if(Fecha2.getTime()>Reserva1.getTime() && Fecha2.getTime()<Reserva2.getTime()){
                  x=x+1;
                }else{
                  if(Reserva1.getTime()>=Fecha1.getTime() && Reserva1.getTime()<Fecha2.getTime()){
                    x=x+1;
                  }
                }
              }
            }
          }
        });

        if(x==0){
          this.reserva.estado = "ACTIVA";
          this.reserva.idCliente = id;
          
          var diferencia = Math.abs(Fecha2.getTime()-Fecha1.getTime());
          var dias= (diferencia/(1000*60*60*24));

          this.reserva.diasEstadia = dias;

          this.reservaSercive.add(this.reserva).subscribe((newReserva: Reserva) => {
            this.servicio = new Servicio;

            this.servicio.idReserva = newReserva.id;
            this.servicio.nombreServicio = "HABITACION";
            this.servicio.cantidad = dias;

            this.habitaciones.forEach(item =>{
              if(item.numeroHabitacion== parseInt(newReserva.habitaciones)){
                this.servicio.precio=item.precio;
                this.servicio.monto = this.servicio.precio* this.servicio.cantidad;
                this.servicioService.addServicoReserva(this.servicio).subscribe();
              }
            });
          });
          this.registerForm.reset();
        }else{
          alert("LA HABITACION ELEGIDA NO ESTA DIPONIBLE EN LA FECHA ESTABLECIDA");
        }
      });        
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

  ModalHabitaciones(){
    const modalRef =  this.modalService.open(ModalHabitacionesComponent, { size: 'lg' });
  }

}
