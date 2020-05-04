import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrarseComponent implements OnInit {

  closeResult: string;
  modal : NgbModalRef;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

  cerrar() {
    this.activeModal.close();
  }

}
