import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fetch("https://sadminhoteles.pythonanywhere.com/api/bookings_hotel/4")
      .then(res => res.json())
      .then(reservaciones => {
        console.log(reservaciones)
        let tbody = document.getElementById("ordenes_tablas")

              if (tbody) {
                tbody.innerHTML = "";

                for(let reserva of reservaciones){
                  let row =
                    `<tr>
                      <td>${reserva["id_booking"]}</td>
                      <td>${reserva["begin_at"]}</td>
                      <td>${reserva["room"]}</td>
                      <td>${reserva["status"]}</td>
                      <td>${reserva["cedula"]}</td>
                      <td>${reserva["price_room"]}</td>
                      <td><button class="boton" type="submit" routerLink="/reservar">Extender</button></td>
                      <td><button class="boton" type="submit" routerLink="/reservar">Agregar Cargo</button></td>
                      <td><button class="boton" type="submit" routerLink="/reservar">Cancelar Reserva</button></td>


                    </tr>`
                  tbody.innerHTML += row;
                }

              }
      })
  }

}
