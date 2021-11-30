import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = 'https://sadminhoteles.pythonanywhere.com/api/'

  constructor(private http: HttpClient) { }


  //Se necescita token para poder obtener todos lo usuarios
  /*getUsuarios(token: string ){
    const httpOptions = {
      headers: new HttpHeaders({
        'auth': token
      }),
      responseType: 'text' as 'json'
    };
    return this.http.get(`${this.API_URI}/usuarios`,httpOptions)
  }
  */
  getUserClient(userC: any){
    return this.http.get(`${this.API_URI}/api/hotels/1/${userC}`)
  }
  addUsuarios(usuario: any){
    return this.http.post(`${this.API_URI}/api/registration/`,usuario)
  }
  login(usuario: any){
    return this.http.post(`${this.API_URI}authentication/login/`,usuario)

  }

  cambiarContra(usuario: any){
    return this.http.post(`${this.API_URI}authentication/password/change/`,usuario)

  }

  logout(){
    localStorage.removeItem('username');
  }
}
