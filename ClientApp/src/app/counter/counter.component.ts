import { Component,  OnInit, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarseComponent } from '../Inicio/NavBar/registrarse/registrarse.component';
import { ClienteService} from '../services/cliente.service'
import { Cliente } from '../models/cliente'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginComponent} from '../Inicio/login/login.component'
import { ServiciosComponent} from '../Inicio/servicios/servicios.component'
import { HabitacionesComponent } from '../Inicio/habitaciones/habitaciones.component';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class CounterComponent {

  registerForm: FormGroup;
  submitted = false;

  constructor(private modalService: NgbModal, private clienteservice: ClienteService, private formBuilder: FormBuilder){}
  
  cliente: Cliente;
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNacimiento:  ['', Validators.required], 
      correo: [''],
      telefono:  [''],
    });

    this.cliente = new Cliente();
  }

  add() {
    this.clienteservice.add(this.cliente).subscribe();
    this.onReset();
  }

  get f() {
    return this.registerForm.controls;
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
  
  
  openLogin(){
    //this.modalService.open(RegistrarseComponent, {centered:true});
    this.modalService.open(LoginComponent, { centered: true });
    //modalRef.componentInstance.docente = docente;
  }

  openServicios(){
    //this.modalService.open(RegistrarseComponent, {centered:true});
    this.modalService.open(ServiciosComponent, { size: 'xl' });
    //modalRef.componentInstance.docente = docente;
  }

  openHabitaciones(){
    this.modalService.open(HabitacionesComponent, { size: 'xl' });
  }

}
