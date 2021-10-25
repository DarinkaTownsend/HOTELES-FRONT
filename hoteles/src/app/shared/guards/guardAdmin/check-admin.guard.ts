import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router ,CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckAdminGuard implements CanActivate {

  constructor(public router: Router) { }

  canActivate():boolean{
    /*
    if (localStorage.getItem('user')) {
        // logged in so return true
        var stringa = localStorage.getItem('user') || '{}'
        var json = JSON.parse(stringa)
        if(json.role='Administrador'){
          this.router.navigate(['/admin']);
          return false;
        }
    }

    // not logged in so redirect to login page

    return true;
    */
    if (localStorage.getItem('user')) {
      // logged in so return true
      var stringa = localStorage.getItem('user') || '{}'
      var json = JSON.parse(stringa)
      if(json.role=='Administrador'){
        return true;
      }
      else{
        this.router.navigate(['/client']);
        return false;
      }
    }
    this.router.navigate(['/']);
    return false;
}

}
