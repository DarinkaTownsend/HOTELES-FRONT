import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-reservaciones',
  templateUrl: './mis-reservaciones.component.html',
  styleUrls: ['./mis-reservaciones.component.css']
})
export class MisReservacionesComponent implements OnInit {
  usuarioC:any=""
  idU:any=""
  estado:any=""
  constructor() { }

  ngOnInit(): void {
    this.usuarioC=localStorage.getItem("username")
    this.idU=localStorage.getItem("idC")
    fetch("https://sadminhoteles.pythonanywhere.com/api/bookings_user/5/"+this.idU)
      .then(res => res.json())
      .then(reservaciones => {
        console.log(reservaciones)
        let tbody = document.getElementById("ordenes_tablas")
        let tbody2 = document.getElementById("ordenes_tablas2")

              if (tbody && tbody2) {
                tbody.innerHTML = "";
                tbody2.innerHTML = "";


                for(let reserva of reservaciones){

                  this.estado=reserva["status"]
                  if(this.estado=="activa"){
                    let row =
                    `<tr>
                      <td>${reserva["id_booking"]}</td>
                      <td>${reserva["begin_at"]}</td>
                      <td>${reserva["room"]}</td>
                      <td>${reserva["price_room"]}</td>
                      <td><button class="boton" type="submit" routerLink="/reservar">Extender</button></td>
                      <td><button class="boton" type="submit" routerLink="/reservar">Cancelar Reserva</button></td>


                    </tr>`
                    tbody.innerHTML += row;
                  }else{
                    let row =
                    `<tr>
                      <td>${reserva["id_booking"]}</td>
                      <td>${reserva["begin_at"]}</td>
                      <td>${reserva["ends_at"]}</td>
                      <td>${reserva["room"]}</td>
                      <td>${reserva["status"]}</td>
                      <td>${reserva["price_room"]}</td>
                      <td>${reserva["cedula"]}</td>


                    </tr>`
                    tbody2.innerHTML += row;
                  }

                }

              }

      })
  }



}
