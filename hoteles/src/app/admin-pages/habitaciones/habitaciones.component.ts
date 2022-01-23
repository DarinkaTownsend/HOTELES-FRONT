import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  constructor() { }
  habitaciones:any=[];
  wifi:any=[];
  breakfast:any=[];
  kitchen:any=[];
  lawdry:any=[];

  ngOnInit(): void {
    fetch("https://sadminhoteles.pythonanywhere.com/api/rooms_hotel/5")
      .then(res => res.json())
      .then(hoteles => {
        console.log(hoteles)
        let tbody = document.getElementById("ordenes_tablas")

              if (tbody) {
                tbody.innerHTML = "";

                for(let hotel of hoteles){
                  if(hotel["room_detail"]["wifi"]){
                    this.wifi="Si"
                  }else{
                    this.wifi="No"
                  }

                  if(hotel["room_detail"]["breakfast"]){
                    this.breakfast="Si"
                  }else{
                    this.breakfast="No"
                  }

                  if(hotel["room_detail"]["kitchen"]){
                    this.kitchen="Si"
                  }else{
                    this.kitchen="No"
                  }


                  if(hotel["room_detail"]["kitchen"]){
                    this.kitchen="Si"
                  }else{
                    this.kitchen="No"
                  }

                  if(hotel["room_detail"]["lawndry"]){
                    this.lawdry="Si"
                  }else{
                    this.lawdry="No"
                  }


                  let row =
                    `<tr>
                      <td>${hotel["id_room"]}</td>
                      <td>${hotel["room_name"]}</td>
                      <td>${hotel["price_room"]}</td>
                      <td>${hotel["room_detail"]["name"]}</td>
                      <td>${hotel["room_detail"]["guests_number"]}</td>
                      <td>${hotel["room_detail"]["ninios"]}</td>
                      <td>${hotel["room_detail"]["beds_number"]}</td>
                      <td>${this.breakfast}</td>
                      <td>${this.wifi}</td>
                      <td>${this.kitchen}</td>
                      <td>${this.kitchen}</td>

                    </tr>`
                  tbody.innerHTML += row;
                }

              }
      })
  }

}
