import { Component, OnInit, Input  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService} from '../../services/cliente.service'
import { Cliente } from '../../models/cliente'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css'],
})
export class ModificarClienteComponent implements OnInit {

  closeResult: string;
  modal : NgbModalRef;
  
  registerForm: FormGroup;
  submitted = false;

  @Input() cliente: Cliente;


  constructor(
    private clienteservice: ClienteService, 
    private formBuilder: FormBuilder,

    private route: ActivatedRoute,
    private location: Location,
    public activeModal: NgbActiveModal
    ) { }

    

    ngOnInit() {
      //this.get();
      this.registerForm = this.formBuilder.group({
        identificacion: ['', Validators.required],
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        genero: ['', Validators.required],
        fechaNacimiento:  ['', Validators.required], 
        correo: [''],
        telefono:  [''],
      });
    }

    get f() {
      return this.registerForm.controls;
    }

    update(): void {
      this.clienteservice.update(this.cliente)
      .subscribe(() => this.onReset());
    }

    desactivar(){
      //this.docente.estado="INACTIVO";
      this.clienteservice.update(this.cliente)
      .subscribe(() => this.onReset());
    }

    delete(): void {
      this.clienteservice.delete(this.cliente)
      .subscribe(() => this.onReset());
    }
  
    onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      this.update();
    }
  
    onReset() {
      this.activeModal.close();
    }



}
