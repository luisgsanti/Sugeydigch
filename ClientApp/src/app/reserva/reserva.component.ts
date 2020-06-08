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

  getHabitaciones() {
    this.habitacionservice.getDisponibles().subscribe(habitaciones => this.habitaciones = habitaciones);
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
                  if(Reserva1.getTime()>Fecha1.getTime() && Reserva1.getTime()<Fecha2.getTime()){
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
          this.reservaSercive.add(this.reserva).subscribe();
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

}
