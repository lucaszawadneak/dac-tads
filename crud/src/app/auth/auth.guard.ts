import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const usuarioLogado = this.loginService.usuarioLogado;

    let { url } = state;

    if (usuarioLogado) {
      if (
        route.data?.['role'] &&
        route.data?.['role'].indexOf(usuarioLogado.perfil) === -1
      ) {
        this.router.navigate(['/login'], {
          queryParams: {
            error: 'Você não tem permissão para acessar esta página',
          },
        });

        return false;
      }
      return true;
    }

    this.router.navigate(['/login'], {
      queryParams: {
        error: 'Você não tem permissão para acessar esta página ' + url,
      },
    });
    return false;
  }
}
