import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  constructor() { }
  habitaciones:any=[];

  ngOnInit(): void {
    fetch("https://sadminhoteles.pythonanywhere.com/api/rooms_hotel/5")
      .then(res => res.json())
      .then(hoteles => {
        console.log(hoteles)
        let tbody = document.getElementById("ordenes_tablas")

              if (tbody) {
                tbody.innerHTML = "";

                for(let hotel of hoteles){
                  let row =
                    `<tr>
                      <td>${hotel["id_room"]}</td>
                      <td>${hotel["room_name"]}</td>
                      <td>${hotel["price_room"]}</td>
                      <td>${hotel["room_detail"]["name"]}</td>
                      <td>${hotel["room_detail"]["guests_number"]}</td>
                      <td>${hotel["room_detail"]["beds_number"]}</td>
                      <td>${hotel["room_detail"]["breakfast"]}</td>
                      <td>${hotel["room_detail"]["wifi"]}</td>
                      <td>${hotel["room_detail"]["kitchen"]}</td>
                      <td>${hotel["room_detail"]["lawndry"]}</td>

                    </tr>`
                  tbody.innerHTML += row;
                }

              }
      })
  }

}
