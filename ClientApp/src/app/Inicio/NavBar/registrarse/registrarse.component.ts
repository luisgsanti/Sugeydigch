import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService} from '../../../services/cliente.service'
import { Cliente } from '../../../models/cliente'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrarseComponent implements OnInit {

  closeResult: string;
  modal : NgbModalRef;
  
  registerForm: FormGroup;
  submitted = false;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, 
    private clienteservice: ClienteService, private formBuilder: FormBuilder) {}

    cliente: Cliente;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      //genero: ['', Validators.required],
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
    this.activeModal.close();
  }

}
