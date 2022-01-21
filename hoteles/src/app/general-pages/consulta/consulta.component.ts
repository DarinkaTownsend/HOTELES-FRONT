import { Component, OnInit } from '@angular/core';
import * as xJS from '../inicio/inicio.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  rooms: any = [];

  constructor() { }
 
  ngOnInit(): void {
    
    fetch("https://sadminhoteles.pythonanywhere.com/api/check_rooms/4/2")
      .then(data => data.json())
      .then(data => {
        this.rooms = data
        console.log(this.rooms)
        let contenedor = document.getElementsByClassName("container py-3");
        let carta = document.getElementsByClassName("card");
        let unica = document.getElementById("unica");
        let count = 0;
        let arreglo = [];
        for (let room of this.rooms) {
          arreglo.push(carta[0]);
          //contenedor[0].innerHTML += carta[0].innerHTML;
          //console.log(carta[0]);1
          console.log(count);
          count ++;
        }
        contenedor[0].innerHTML += "";
        console.log(contenedor[0]);
        console.log("ggg");
        console.log(carta);
        for (var j = 0; j < arreglo.length+1; j++) {
          if(j == arreglo.length){
            let eliminar = document.getElementsByClassName("card");
            eliminar[j].innerHTML = "";
          }
          else{
            contenedor[0].innerHTML += arreglo[j].outerHTML;
          }
        }
        cargarHabitaciones();
      });
  }
  reservation() {
    //console.log(document.getElementById("calendario1"));
    console.log(document.querySelector("input[type=date]"));
  }

}

let cargarHabitaciones = () =>{
  
  fetch("https://sadminhoteles.pythonanywhere.com/api/check_rooms/4/2")
  .then(data => data.json())
  .then(data => {
    let rooms;
    rooms = data
    console.log(rooms)
    let contador=0;
    let c=0;
    let i=0;
    let m=0;
    for (let room of rooms) {
      console.log("holaa");
      console.log("https://sadminhoteles.pythonanywhere.com/api/check_rooms/4/"+xJS.variable);
      let titulo = document.getElementsByClassName('card-text te');
      let titulo2 = document.getElementsByClassName('card-title');
      let precio = document.getElementsByClassName('precio');
      let att = document.getElementsByClassName('card');

      att[m].setAttribute("id",room["id_room"]);
      m++;
      precio[i].textContent = "Precio : $" + room["price_room"];
      i++;

      titulo2[c].textContent = room["room_name"];
      c++;

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
      titulo[contador].textContent = "Cocina: " + room["room_detail"]["kitchen"] + " ";
      contador++;


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

    }
      
  });
  
}
document.addEventListener('DOMContentLoaded', function(){
  cargarHabitaciones();

});

let precio;
let cama;
let cocina;
let wifi;
let desayuno;
let lavanderia;
let huespedes;
let tipo;
let seleccionadoPrecio = () =>{

}
