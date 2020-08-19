import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  //let's re-write this canActivate method
  constructor(private _auth:AuthService,
              private _router:Router) {}
  
  canActivate():boolean {
      if(this._auth.loggedIn()) {
        return true
      }
      else {
        this._router.navigate(['/login'])
        return false
      }
  }

}
