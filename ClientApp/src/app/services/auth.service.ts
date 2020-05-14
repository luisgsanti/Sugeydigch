import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    constructor(private _router: Router) {}

    login(identificacion: string, rol: string, nombre: string) {

        sessionStorage.setItem('identificacion', identificacion);
        sessionStorage.setItem('user', nombre);
        sessionStorage.setItem('roles', JSON.stringify([rol]));        
        this._router.navigate(['/Recepcionista']);
    }

    logout() {
        sessionStorage.clear();
        this._router.navigate(['/Inicio']);
    }

    isAuthenticated(): boolean {
        return sessionStorage.getItem('user')!=null;
    }

    hasRole(rol: string): boolean {
        if (!this.isAuthenticated()) return false;
        let roles: string[] = JSON.parse(sessionStorage.getItem('roles'));
        return roles.indexOf(rol) >= 0;
    }

    getUserName(): string {
        return sessionStorage.getItem('user') != null ? sessionStorage.getItem('user'):'Anonimo';
    }
}