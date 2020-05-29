import { Component, OnInit } from '@angular/core';
import { RegistrarseComponent } from '../../Inicio/NavBar/registrarse/registrarse.component';
import { HabitacionService} from '../../services/habitacion.service'
import { Habitacion } from '../../models/habitacion'

@Component({
  selector: 'app-consultar-habitaciones',
  templateUrl: './consultar-habitaciones.component.html',
  styleUrls: ['./consultar-habitaciones.component.css']
})
export class ConsultarHabitacionesComponent implements OnInit {

  habitaciones: Habitacion[];

  constructor( private habitacionservice: HabitacionService,) { }

  ngOnInit() {
    this.getAll();
  }

  /*open(){
    //this.modalService.open(RegistrarseComponent, {centered:true});
    this.modalService.open(RegistrarseComponent, { size: 'lg' });
    //modalRef.componentInstance.docente = docente;
  }*/

  getAll() {
    this.habitacionservice.getAll().subscribe(habitaciones => this.habitaciones = habitaciones);
  }


}
