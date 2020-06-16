import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarseComponent } from '../Inicio/NavBar/registrarse/registrarse.component';
import { AuthService} from '../services/auth.service'

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    ){}

  open(){
    //this.modalService.open(RegistrarseComponent, {centered:true});
    this.modalService.open(RegistrarseComponent, { size: 'lg' });
    //modalRef.componentInstance.docente = docente;
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logOut(){
    this.authService.logout();
  }
}
