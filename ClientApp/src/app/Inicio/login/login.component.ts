import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { Login } from 'src/app/models/login';
import { ClienteService } from 'src/app/services/cliente.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute } from'@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  closeResult: string;
  modal : NgbModalRef;
  constructor(private authService: AuthService, private loginService:LoginService,private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  log:Login;
  objeto:Login;
  nombre:string;

  getUsuario(objeto:Login): void {

    this.loginService.getUsuario(objeto.usuario).subscribe(aux => {
      
      this.log = aux;

      if(objeto.clave === this.log.clave){
        this.authService.login(this.log.usuario,this.log.rol, this.log.identificacion);
        //alert(JSON.stringify("Ha sido logeado con exito: " + this.log.usuario));
        this.close();
      }else{
        alert("Usuario o Clave Incorrecto");
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.objeto = new Login();
  }

  close(){
    this.activeModal.close();
  }

}
