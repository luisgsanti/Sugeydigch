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
import { ServiciosComponent } from './reserva/ProcesarReserva/servicios/servicios.component';
import { HabitacionesComponent } from './Inicio/habitaciones/habitaciones.component';
import { ContactenosComponent } from './Inicio/contactenos/contactenos.component';
import { DescuentosComponent } from './Inicio/descuentos/descuentos.component';
import { ConsultarHabitacionesComponent } from './Habitaciones/consultar-habitaciones/consultar-habitaciones.component';
import { ModificarClienteComponent } from './Cliente/modificar-cliente/modificar-cliente.component';
import { ConsultarReservasComponent } from './reserva/consultar-reservas/consultar-reservas.component';
import { AcompanantesComponent } from './reserva/ProcesarReserva/acompanantes/acompanantes.component';
import { DatosComponent } from './reserva/ProcesarReserva/datos/datos.component';
import { DescuentosReservaComponent } from './reserva/ProcesarReserva/descuentos-reserva/descuentos-reserva.component';

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
    ContactenosComponent
  ]
})
export class AppModule { }
