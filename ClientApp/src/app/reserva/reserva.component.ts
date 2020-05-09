import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarseComponent } from '../Inicio/NavBar/registrarse/registrarse.component';
import { ClienteService} from '../services/cliente.service'
import { Cliente } from '../models/cliente'

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(private modalService: NgbModal, private clienteservice: ClienteService,) { }

  clientes: Cliente[];

  ngOnInit() {
    this.getAll();
  }

  open(){
    //this.modalService.open(RegistrarseComponent, {centered:true});
    this.modalService.open(RegistrarseComponent, { size: 'lg' });
    //modalRef.componentInstance.docente = docente;
  }

  getAll() {
    this.clienteservice.getAll().subscribe(clientes => this.clientes = clientes);
  }

  mostrar(){
    document.getElementById('tabla').style.width = "100%";
    document.getElementById('tabla').style.display = "block";
  }

}
