import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../../models/cliente';
import { Reserva } from '../../../models/reserva';
import { ClienteService } from '../../../services/cliente.service'
import { ReservaService } from '../../../services/reserva.service'

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  constructor(private _router: Router) { }

  @Input() reserva: Reserva;

  ngOnInit() {
  }

  funcin(){
    
  }

}
