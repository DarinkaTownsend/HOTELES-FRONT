import { Component, OnInit } from '@angular/core';
import * as xJS from '../consulta/consulta.component';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  rooms: any = [];
  personask: any = "";
  constructor() { }

  ngOnInit(): void {
    this.personask = localStorage.getItem('personask');
    console.log(this.personask);
    fetch("https://sadminhoteles.pythonanywhere.com/api/check_rooms/5/" + this.personask)
      .then(data => data.json())
      .then(data => {

        this.rooms = data
        console.log(this.rooms)
        let contador = 0;
        for (let room of this.rooms) {
          let titulo = document.getElementsByClassName('card-text te');
          titulo[contador].textContent = "Personas: " + room["room_detail"]["guests_number"] + " ";
          contador++;
          titulo[contador].textContent = "Camas: " + room["room_detail"]["beds_number"] + " ";
          contador++;

          if (room["room_detail"]["breakfast"]) {
            titulo[contador].textContent = "Desayuno: Sí";
            contador++;

          } else {
            titulo[contador].textContent = "Desayuno: No";
            contador++;

          }

          if (room["room_detail"]["kitchen"]) {
            titulo[contador].textContent = "Cocina: Sí";
            contador++;

          } else {
            titulo[contador].textContent = "Cocina: No";
            contador++;

          }

          if (room["room_detail"]["wifi"]) {
            titulo[contador].textContent = "Wifi: Sí";
            contador++;

          } else {
            titulo[contador].textContent = "Wifi: No";
            contador++;

          }
          if (room["room_detail"]["lawndry"]) {
            titulo[contador].textContent = "Lavanderia: Sí";
            contador++;

          } else {
            titulo[contador].textContent = "Lavanderia: No";
            contador++;

          }
          let titulo2 = document.getElementsByClassName('card-title');
          titulo2[0].textContent = room["room_name"];
          let titulo3 = document.getElementsByClassName('precio');
          titulo3[0].textContent = "Precio: $" + room["price_room"];
        }


      });
  }

  
}
