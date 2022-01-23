import { Component, OnInit } from '@angular/core';
import { Reserva } from '../Interfaces_admin/reserva';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  reservacionesT:any=[]
  constructor() { }

  ngOnInit(): void {
    fetch("https://sadminhoteles.pythonanywhere.com/api/bookings_hotel/5")
      .then(res => res.json())
      .then(reservaciones => {
        console.log(reservaciones)
        let reser_todo:Reserva
        for(let reserva of reservaciones){
                  reser_todo={
                    id_booking:reserva["id_booking"],
                    begin_at:reserva["begin_at"],
                    room:reserva["room"],
                    status:reserva["status"],
                    cedula:reserva["cedula"],
                    price_room:reserva["price_room"]

                  }

                  this.reservacionesT.push(reser_todo)

        }


      })
  }

  extender(id: string,fe:string){

    localStorage.setItem("idBooking",id)
    localStorage.setItem("fechaReserva",fe.replace("T"," ").substring(0, fe.length - 1))

  }

  agregar(id: string,fe:string){

    localStorage.setItem("idBooking",id)
    localStorage.setItem("fechaReserva",fe.replace("T"," ").substring(0, fe.length - 1))

  }

  cancelar(id: string,fe:string){

    localStorage.setItem("idBooking",id)
    localStorage.setItem("fechaReserva",fe.replace("T"," ").substring(0, fe.length - 1))

  }


}


