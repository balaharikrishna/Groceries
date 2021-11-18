import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { GroceryServiceService } from './grocery-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAccessGuard implements CanActivate {
  constructor(private _router:Router ,  public _serverlogin: GroceryServiceService ) { }
  emailaddress:any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(sessionStorage.getItem('token') != null && sessionStorage.getItem('token') != undefined)
      {
        return true;
      }
     this._router.navigate(['/Login']) 
     return false;
  }
  
}
