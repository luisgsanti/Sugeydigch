import { Component, OnInit } from '@angular/core';
import { HabitacionService} from '../../services/habitacion.service'
import { Habitacion } from '../../models/habitacion'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-habitaciones',
  templateUrl: './modal-habitaciones.component.html',
  styleUrls: ['./modal-habitaciones.component.css']
})
export class ModalHabitacionesComponent implements OnInit {

  habitaciones: Habitacion[];

  constructor(
    private habitacionservice: HabitacionService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.habitacionservice.getAll().subscribe(habitaciones => this.habitaciones = habitaciones);
  }

}
