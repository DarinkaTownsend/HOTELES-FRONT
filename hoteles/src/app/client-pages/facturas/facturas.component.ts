import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  usuarioC:any=""

  idU:any=""
  estado:any=""
  constructor() { }

  ngOnInit(): void {
    this.usuarioC=localStorage.getItem("username")
    this.idU=localStorage.getItem("idC")


  fetch("https://sadminhoteles.pythonanywhere.com/api/bookings_user/4/"+this.idU)
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
                    </tr>`
                    tbody.innerHTML += row;

                }

              }

      })
    }


}
