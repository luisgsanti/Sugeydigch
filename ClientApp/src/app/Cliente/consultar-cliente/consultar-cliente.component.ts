import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarseComponent } from '../../Inicio/NavBar/registrarse/registrarse.component';
import { ClienteService} from '../../services/cliente.service'
import { Cliente } from '../../models/cliente'
import { ModificarClienteComponent } from '../modificar-cliente/modificar-cliente.component'




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

  update(cliente: Cliente){
    const modalRef= this.modalService.open(ModificarClienteComponent, { size: 'lg' });
    modalRef.componentInstance.cliente = cliente;
  }

  getAll() {
    this.clienteservice.getAll().subscribe(clientes => this.clientes = clientes);
  }

  
}

