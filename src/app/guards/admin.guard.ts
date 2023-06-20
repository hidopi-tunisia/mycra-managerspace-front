import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CoreConfigService } from '@core/services/config.service';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router:Router,
    private _coreConfigService:CoreConfigService
    ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  let role =this.authService.getRole()
   if(role && role=="manager"){
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: false
        },
        menu: {
          hidden: false
        },
        footer: {
          hidden: false
        },
        customizer: true,
        enableLocalStorage: true
      }
    };
    return true
   }else{
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
    this.router.navigateByUrl('/login')
    return false
  }
  }
  
}
