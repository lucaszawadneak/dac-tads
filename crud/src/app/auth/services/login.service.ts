import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Observable, of } from 'rxjs';
import { Login } from 'src/app/shared/models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public get usuarioLogado(): Usuario {
    let user = localStorage.getItem('dac:user');
    if (!!user) return JSON.parse(user);
    return new Usuario(-1, '', '', '', '');
  }

  public set usuarioLogado(user: Usuario) {
    localStorage.setItem('dac:user', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('dac:user');
  }

  login(login: Login): Observable<Usuario | null> {
    let user = new Usuario(1, 'Lucas', 'lucas', 'lucas', 'FUNC');

    if (login.email === login.password) {
      switch (login.email) {
        case 'lucas':
          user = new Usuario(1, 'Lucas', 'lucas', 'lucas', 'FUNC');
          break;
        case 'admin':
          user = new Usuario(1, 'Admin', 'admin', 'admin', 'ADMIN');
          break;
        case 'gerente':
          user = new Usuario(1, 'Gerente', 'gerente', 'gerente', 'GER');
          break;
        default:
          break;
      }
      return of(user);
    } else {
      return of(null);
    }
  }
}
