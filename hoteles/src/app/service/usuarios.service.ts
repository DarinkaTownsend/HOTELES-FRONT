import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = 'https://sadminhoteles.pythonanywhere.com'

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
    return this.http.post(`${this.API_URI}/api/authentication/login/`,usuario)
  }
  logout(){
    localStorage.removeItem('username');
    //localStorage.removeItem('idCursoE')
  }
  getRoomType(){
    return this.http.get(`${this.API_URI}/api/room_types/1`)
  }

  getDatosU(pk:any, token:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'auth': token
      }),
      responseType: 'text' as 'json'
    };
    return this.http.get(`${this.API_URI}/api/user_type/${pk}`,httpOptions)

  }
  getUsuarioCara(pk:any,token: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'auth': token
      }),
      responseType: 'text' as 'json',
    }
    return this.http.get(`${this.API_URI}/api/user_type/`+pk,httpOptions)
  }

  getPublicidad(){
    return this.http.get(`${this.API_URI}/api/publicidad/`)
  }
  getCuarto(idCuarto:any){
    return this.http.get(`${this.API_URI}/api/get_room/`,idCuarto)
  }

  AgregarCargos(cuerpo: any){
    return this.http.post(`${this.API_URI}/api/booking_cost/`,cuerpo)
  }

  CambiarCargos(cuerpo: any){
    return this.http.post(`${this.API_URI}/api/booking_setcosts/`,cuerpo)
  }

  ExtenderReserva (cuerpo: any){
    return this.http.post(`${this.API_URI}/api/extend_booking/`,cuerpo)
  }

  CancelarReserva (cuerpo:any){
    return this.http.post(`${this.API_URI}/api/cancel_booking/`,cuerpo)
  }

  AgregarPuntuacion (cuerpo:any){
    return this.http.post(`${this.API_URI}/api/puntuacion/`,cuerpo)
  }

  AgregarPublicidad (cuerpo:any){
    return this.http.post(`${this.API_URI}/api/publicidad/`,cuerpo)
  }

  AgregarReserva (cuerpo:any){
    return this.http.post(`${this.API_URI}/api/check_in/`,cuerpo)
  }

  AgregarDetalleCargo (cuerpo:any){
    return this.http.post(`${this.API_URI}/api/detalle/`,cuerpo)
  }
}
