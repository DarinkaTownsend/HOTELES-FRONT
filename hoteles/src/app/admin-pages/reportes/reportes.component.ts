import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  idU:any=""
  estado:any=""
  constructor() { }

  ngOnInit(): void {
    const selectElement = document.getElementById("cabecera");

    if (selectElement) {
      selectElement.addEventListener('change', (event) => {
        if(event.currentTarget){
          var elemento=(<HTMLInputElement>event.target).value
          console.log(elemento)
          if((<HTMLInputElement>event.target).value == "CalHotel"){
            var enlace = `http://localhost:3002/reportes/user/${(<HTMLInputElement>event.target).value}`;
          }else if((<HTMLInputElement>event.target).value == "ventas"){
            console.log("aqui")
            let tcabeza = document.getElementById("cabecera")
            if(tcabeza){
              let row2 =
                    `<tr>
                    <th>#</th>
                    <th>Fecha de Factura</th>
                    <th>Cliente</th>
                    <th>Ganancia</th>
                    </tr>`
              tcabeza.innerHTML = row2;
            }




            fetch("https://sadminhoteles.pythonanywhere.com/api/bookings_hotel/4")
            .then(res => res.json())
            .then(reservaciones => {
            console.log(reservaciones)
            let tbody = document.getElementById("ordenes_tablas")


              if (tbody) {
                tbody.innerHTML = "";

                for(let reserva of reservaciones){
                  this.estado=reserva["status"];
                  if(this.estado=="terminada"){


                  let row =
                    `<tr>
                      <td>${reserva["id_booking"]}</td>
                      <td>${reserva["begin_at"]}</td>

                      <td>${reserva["cedula"]}</td>
                      <td>${reserva["price_room"]}</td>

                    </tr>`
                  tbody.innerHTML += row;
                }
                }

              }
      })






          }



        }
      });

    }
  }
}

