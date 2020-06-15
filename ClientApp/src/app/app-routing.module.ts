import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarseComponent } from '../app/Inicio/NavBar/registrarse/registrarse.component';
import { HomeComponent } from '../app/home/home.component';
import { RecepcionistaComponent } from '../app/recepcionista/recepcionista.component'
import { ReservaComponent } from '../app/reserva/reserva.component'
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent} from './Inicio/login/login.component';
import { ConsultarClienteComponent } from './Cliente/consultar-cliente/consultar-cliente.component'
import { ModificarClienteComponent } from './Cliente/modificar-cliente/modificar-cliente.component'
import { NavMenuComponent } from './nav-menu/nav-menu.component'
import { ConsultarHabitacionesComponent} from './Habitaciones/consultar-habitaciones/consultar-habitaciones.component'
import { ConsultarReservasComponent} from './reserva/consultar-reservas/consultar-reservas.component'
import { AcompanantesComponent} from './reserva/ProcesarReserva/acompanantes/acompanantes.component'
import { DatosComponent} from './reserva/ProcesarReserva/datos/datos.component'
import { DescuentosReservaComponent} from './reserva/ProcesarReserva/descuentos-reserva/descuentos-reserva.component'
import { FacturaReservaComponent} from './reserva/ProcesarReserva/factura-reserva/factura-reserva.component'
import { NuevaReservaClienteComponent} from './UserCliente/nueva-reserva-cliente/nueva-reserva-cliente.component'

const routes: Routes = [

  { path:'', component:  CounterComponent, pathMatch: 'full' },
  { path:'Recepcionista', component:RecepcionistaComponent  },
  { path:'Recepcionista/Reserva', component:ReservaComponent  },
  { path:'Recepcionista/Reserva/ProcesarReserva/Acompanantes', component:AcompanantesComponent  },
  { path:'Recepcionista/Reserva/ProcesarReserva/Datos', component:DatosComponent},
  { path:'Recepcionista/Reserva/ProcesarReserva/Descuentos', component:DescuentosReservaComponent},
  { path:'Recepcionista/ConsultarClientes', component:ConsultarClienteComponent },
  { path:'Recepcionista/ModificarCliente/:id', component:ModificarClienteComponent  },
  { path:'Recepcionista/NavMenu', component:NavMenuComponent },
  { path:'Recepcionista/ConsultarHabitaciones', component:ConsultarHabitacionesComponent },
  { path:'Recepcionista/ConsultarReservas', component:ConsultarReservasComponent },
  { path:'Factura', component:FacturaReservaComponent},
  { path:'Cliente/NuevaReserva', component:NuevaReservaClienteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
