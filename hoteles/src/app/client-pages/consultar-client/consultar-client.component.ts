import { hostViewClassName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/general-pages/Interfaces-general/habitacion';

@Component({
  selector: 'app-consultar-client',
  templateUrl: './consultar-client.component.html',
  styleUrls: ['./consultar-client.component.css']
})
export class ConsultarClientComponent implements OnInit {
  personask:any="";
  wifi:any="";
  breakfast:any="";
  kitchen:any="";
  lawdry:any="";
  habitacionesT:any=[]
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.personask=localStorage.getItem("personak")

    fetch("https://sadminhoteles.pythonanywhere.com/api/check_rooms/5/"+parseInt(this.personask))
      .then(data => data.json())
      .then(habitaciones => {
        console.log(habitaciones)

        let habit_todo:Habitacion
        for(let habitacion of habitaciones){
          if(habitacion["room_detail"]["wifi"]){
            this.wifi="Si"
          }else{
            this.wifi="No"
          }

          if(habitacion["room_detail"]["breakfast"]){
            this.breakfast="Si"
          }else{
            this.breakfast="No"
          }

          if(habitacion["room_detail"]["kitchen"]){
            this.kitchen="Si"
          }else{
            this.kitchen="No"
          }


          if(habitacion["room_detail"]["kitchen"]){
            this.kitchen="Si"
          }else{
            this.kitchen="No"
          }

          if(habitacion["room_detail"]["lawndry"]){
            this.lawdry="Si"
          }else{
            this.lawdry="No"
          }


                  habit_todo={
                    nombreH: habitacion["room_name"],
                    numeroPer: habitacion["room_detail"]["guests_number"],
                    numeroC: habitacion["room_detail"]["beds_number"],
                    desayuno: this.breakfast,
                    cocina: this.kitchen,
                    wifi: this.wifi,
                    lavadora: this.lawdry,
                    precio: habitacion["price_room"],
                    idHabitacion:habitacion["id_room"]

                  }

                  this.habitacionesT.push(habit_todo)










        }


      });
  }

  EnviarInfo(nombreH: any,numeroPer: any,numeroC: any,desayuno: any,cocina: any,wifi: any,lavadora: any,precio: any,idHabitacion:any){
    var cuerpo={

      "nombreHS":nombreH,
      "numeroPerS":numeroPer,
      "numeroCS":numeroC,
      "desayunoS":desayuno,
      "cocinaS": cocina,
      "wifiS": wifi,
      "lavadoraS":lavadora,
      "precioS":precio,
      "idHabitacion":idHabitacion

    }

    localStorage.setItem("nombreHS",cuerpo.nombreHS)
    localStorage.setItem("numeroPerS",cuerpo.numeroPerS)
    localStorage.setItem("numeroCS",cuerpo.numeroCS)
    localStorage.setItem("desayunoS",cuerpo.desayunoS)
    localStorage.setItem("cocinaS",cuerpo.cocinaS)
    localStorage.setItem("wifiS",cuerpo.wifiS)
    localStorage.setItem("lavadoraS",cuerpo.lavadoraS)
    localStorage.setItem("precioS",cuerpo.precioS)
    localStorage.setItem("idHabitacionS",cuerpo.idHabitacion)


  }

}

