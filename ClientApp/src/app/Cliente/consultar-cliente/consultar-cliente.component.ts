import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarseComponent } from '../../Inicio/NavBar/registrarse/registrarse.component';
import { ClienteService} from '../../services/cliente.service'
import { Cliente } from '../../models/cliente'




@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})

export class ConsultarClienteComponent implements OnInit {

  clientes: Cliente[];
  

  constructor(private modalService: NgbModal, private clienteservice: ClienteService,) {  }

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

  
}

