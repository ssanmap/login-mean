import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private authservice: AuthService,
  private router: Router) {
    
  }
  canActivate(): Observable<boolean> | boolean  {
    console.log('canactivate');
    return this.authservice.validarToken()
      .pipe(
        tap(valid => {
          if (!valid) {
            this.router.navigateByUrl('/auth');
          }
        })
      )
  }
  canLoad(): Observable<boolean> | boolean  {
    console.log('canload');
    return this.authservice.validarToken()
    .pipe(
      tap(valid => {
        if (!valid) {
          this.router.navigateByUrl('/auth');
        }
      })
    )
  }
}
