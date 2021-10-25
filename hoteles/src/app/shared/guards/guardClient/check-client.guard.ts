import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router ,CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckClientGuard implements CanActivate {

  constructor(public router: Router) { }

  canActivate():boolean{
    /*
    if (localStorage.getItem('user')) {
        // logged in so return true
        var stringa = localStorage.getItem('user') || '{}'
        var json = JSON.parse(stringa)
        if(json.role='Usuario'){
          this.router.navigate(['/client']);
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
      if(json.role=='Usuario'){
        return true;
      }
      else{
        this.router.navigate(['/admin']);
        return false;
      }
    }
    this.router.navigate(['/']);
    return false;
}

}
