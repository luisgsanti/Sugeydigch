import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RegistrarseComponent } from '../app/Inicio/NavBar/registrarse/registrarse.component';
import { RecepcionistaComponent } from './recepcionista/recepcionista.component';
import { ReservaComponent } from './reserva/reserva.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { ClineteFiltroPipe } from './Filtos/clinete-filtro.pipe';
import { ConsultarClienteComponent } from './Cliente/consultar-cliente/consultar-cliente.component';
import { LoginComponent } from './Inicio/login/login.component';
import { ServiciosComponent } from './Inicio/servicios/servicios.component';
import { HabitacionesComponent } from './Inicio/habitaciones/habitaciones.component';
import { ContactenosComponent } from './Inicio/contactenos/contactenos.component';
import { DescuentosComponent } from './Inicio/descuentos/descuentos.component';
import { ConsultarHabitacionesComponent } from './Habitaciones/consultar-habitaciones/consultar-habitaciones.component';
import { ModificarClienteComponent } from './Cliente/modificar-cliente/modificar-cliente.component';
import { ConsultarReservasComponent } from './reserva/consultar-reservas/consultar-reservas.component';
import { AcompanantesComponent } from './reserva/ProcesarReserva/acompanantes/acompanantes.component';
import { DatosComponent } from './reserva/ProcesarReserva/datos/datos.component';
import { DescuentosReservaComponent } from './reserva/ProcesarReserva/descuentos-reserva/descuentos-reserva.component';
import { ServiciosReservaComponent } from './reserva/ProcesarReserva/servicios-reserva/servicios-reserva.component';
import { ModalHabitacionesComponent } from './Habitaciones/modal-habitaciones/modal-habitaciones.component';
import { FacturaReservaComponent } from './reserva/ProcesarReserva/factura-reserva/factura-reserva.component';
import { NavBarClienteComponent } from './UserCliente/nav-bar-cliente/nav-bar-cliente.component';
import { NuevaReservaClienteComponent } from './UserCliente/nueva-reserva-cliente/nueva-reserva-cliente.component';
import { MisReservasClienteComponent } from './UserCliente/mis-reservas-cliente/mis-reservas-cliente.component';
import { MiCuentaClienteComponent } from './UserCliente/mi-cuenta-cliente/mi-cuenta-cliente.component';
import { ModalConsultarReservaComponent } from './reserva/modal-consultar-reserva/modal-consultar-reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RegistrarseComponent,
    RecepcionistaComponent,
    ReservaComponent,
    BarraLateralComponent,
    ClineteFiltroPipe,
    ConsultarClienteComponent,
    LoginComponent,
    ServiciosComponent,
    HabitacionesComponent,
    ContactenosComponent,
    DescuentosComponent,
    ConsultarHabitacionesComponent,
    ModificarClienteComponent,
    ConsultarReservasComponent,
    AcompanantesComponent,
    DatosComponent,
    DescuentosReservaComponent,
    ServiciosReservaComponent,
    ModalHabitacionesComponent,
    FacturaReservaComponent,
    NavBarClienteComponent,
    NuevaReservaClienteComponent,
    MisReservasClienteComponent,
    MiCuentaClienteComponent,
    ModalConsultarReservaComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    RegistrarseComponent, 
    LoginComponent, 
    ServiciosComponent,
    HabitacionesComponent,
    ContactenosComponent,
    DatosComponent,
    ModificarClienteComponent,
    ModalHabitacionesComponent,
    ServiciosReservaComponent,
    NuevaReservaClienteComponent,
    MiCuentaClienteComponent,
    ModalConsultarReservaComponent
  ]
})
export class AppModule { }
