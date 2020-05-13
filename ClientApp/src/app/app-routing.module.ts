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

const routes: Routes = [

  { path:'', component:  CounterComponent, pathMatch: 'full' },
  { path:'Recepcionista', component:RecepcionistaComponent  },
  { path:'Reserva', component:ReservaComponent  },
  { path:'Fecha', component:FetchDataComponent  },
  { path:'Counter', component:CounterComponent  },
  { path:'Login', component:LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
