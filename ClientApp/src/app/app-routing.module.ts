import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarseComponent } from '../app/Inicio/NavBar/registrarse/registrarse.component';
import { HomeComponent } from '../app/home/home.component';


const routes: Routes = [

  { path: '', component:  HomeComponent, pathMatch: 'full' },
  { path:'registrarse', component:RegistrarseComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
