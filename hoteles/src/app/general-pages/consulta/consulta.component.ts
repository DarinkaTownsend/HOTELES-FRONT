import { Component, OnInit } from '@angular/core';
import * as xJS from '../inicio/inicio.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  rooms: any = [];
  precios:any = [];
  camas:any = [];
  wifis:any = [];
  cocinas:any = [];
  desayunos:any = [];
  lavanderias:any = [];
  huespedes:any = [];
  tipos:any = [];

  opcionPrecio: any  = '0';
  verPrecio: string        = '';
  opcionCama: any  = 0;
  verCama: any        = 0;
  opcionWifi: string  = '0';
  verWifi: string        = '';
  opcionCocina: string  = '0';
  verCocina: string        = '';
  opcionDesayuno: string  = '0';
  verDesayuno: string        = '';
  opcionLavanderia: string  = '0';
  verLavanderia: string        = '';
  opcionHuespede: any  = 0;
  verHuespede: any        = 0;
  opcionTipo: string  = '0';
  verTipo: string        = '';
  func : any;
  constructor() { 
    this.precios=["Desde lo más barato","Desde lo más caro"];
    this.camas=[1,2,3];
    this.wifis=["Sí","No"];
    this.cocinas=["Sí","No"];
    this.desayunos=["Sí","No"];
    this.lavanderias=["Sí","No"];
this.huespedes=[1,2,3,4,5];
this.tipos=["Individual","Familiar","Pareja","Presidencial","Lujo"];

  }
 
  ngOnInit(): void {
    
    fetch("https://sadminhoteles.pythonanywhere.com/api/check_rooms/5/"+xJS.variable)
      .then(data => data.json())
      .then(data => {
        this.rooms = data;
        objeto= data;
        console.log(this.rooms)
        let contenedor = document.getElementsByClassName("container py-3");
        let carta = document.getElementsByClassName("card");
        let count = 0;
        let arreglo = [];
        for (let room of this.rooms) {
          arreglo.push(carta[0]);
          //contenedor[0].innerHTML += carta[0].innerHTML;
          //console.log(carta[0]);1
          console.log(count);
          count ++;
        }
        //contenedor[0].innerHTML += "";
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

        let filtradoNuevo2 = () =>{
          console.log("nooo");

          precio= this.opcionPrecio;
          console.log(precio);
          console.log("llllll");

    console.log(this.opcionPrecio);
          cama= this.opcionCama;
          console.log(cama);
          cocina= this.opcionCocina;
          console.log(cocina);
      
          wifi= this.opcionWifi;
          console.log(wifi);
      
          desayuno= this.opcionDesayuno;
          console.log(desayuno);
      
          lavanderia= this.opcionLavanderia;
          console.log(lavanderia);
      
          huespedes= this.opcionHuespede;
          console.log(huespedes);
      
          tipo= this.opcionTipo;
          console.log(tipo);
      
          filtradoNuevo();
        };
        let filtradoNuevo3 = () =>{
          precio= this.opcionPrecio;

        };

        cargarHabitaciones();
        document.getElementsByClassName("cs-select cs-skin-border")[0].addEventListener("change", function() {
          filtradoNuevo3();
        }, false);
        document.getElementsByClassName("boton5")[0].addEventListener("click", function() {
          filtradoNuevo2();

        }, false);
      });
  }
  reservation() {
    //console.log(document.getElementById("calendario1"));
    console.log(document.querySelector("input[type=date]"));
  }
   capturar() {
        // Pasamos el valor seleccionado a la variable verSeleccion
        console.log("nooo");

    precio= this.opcionPrecio;
    console.log(precio);
    

    cama= this.opcionCama;
    console.log(cama);
    cocina= this.opcionCocina;
    console.log(cocina);

    wifi= this.opcionWifi;
    console.log(wifi);

    desayuno= this.opcionDesayuno;
    console.log(desayuno);

    lavanderia= this.opcionLavanderia;
    console.log(lavanderia);

    huespedes= this.opcionHuespede;
    console.log(huespedes);

    tipo= this.opcionTipo;
    console.log(tipo);

    filtradoNuevo();
  }
  capturar1() {

console.log("pppppp");
}
}
function seleccionar(){
  console.log("ggg");
};
let cliente: ConsultaComponent = new ConsultaComponent();
let cargarHabitaciones = () =>{
  
  fetch("https://sadminhoteles.pythonanywhere.com/api/check_rooms/5/"+xJS.variable)
  .then(data => data.json())
  .then(data => {
    let rooms;
    rooms = data
    console.log(rooms)
    let contador=0;
    let c=0;
    let i=0;
    let m=0;
    let k=0;
    document.getElementsByClassName("cs-select cs-skin-border")[0].addEventListener("change", function() {
      cliente.capturar();
      console.log(document.getElementsByClassName("cs-select cs-skin-border")[0].nodeValue);
    }, false);
    for (let room of rooms) {
      console.log("holaa");
      console.log("https://sadminhoteles.pythonanywhere.com/api/check_rooms/5/"+xJS.variable);
      let titulo = document.getElementsByClassName('card-text te');
      let titulo2 = document.getElementsByClassName('card-title');
      let precio = document.getElementsByClassName('precio');
      let att = document.getElementsByClassName('card');
      let aboton = document.getElementsByClassName('boton1');

      aboton[k].addEventListener("click", function() {
        console.log(room["id_room"]);
        variableID=room["id_room"];
      }, false);
      k++;
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

    }
   
      
  });

}

let precio;
let objeto: any = [];

let cama=0;
let cocina="";
let wifi="";
let desayuno="";
let lavanderia="";
let huespedes=0;
let tipo="";


let filtradoNuevo = () =>{
  let contador=0;
  let c=0;
  let i=0;
  let m=0;
  let k=0;
  let p =0;
  let jj = document.getElementsByClassName("card");
  console.log(objeto);
  console.log(lavanderia);
  console.log(cama);
  console.log(cocina);
  console.log(desayuno);
  console.log(huespedes);
  console.log(objeto);

  for (let room of objeto) {
    if(cama==room["room_detail"]["beds_number"] && cocina==room["room_detail"]["kitchen"] &&
    wifi==room["room_detail"]["wifi"] && desayuno==room["room_detail"]["breakfast"] && 
    lavanderia==room["room_detail"]["lawndry"]&& huespedes==room["room_detail"]["guests_number"]) {
      console.log("holaa");
      console.log("https://sadminhoteles.pythonanywhere.com/api/check_rooms/5/"+xJS.variable);
      let titulo = document.getElementsByClassName('card-text te');
      let titulo2 = document.getElementsByClassName('card-title');
      let precio = document.getElementsByClassName('precio');
      let att = document.getElementsByClassName('card');
      let aboton = document.getElementsByClassName('boton1');
  
      aboton[k].addEventListener("click", function() {
        console.log(room["id_room"]);
        variableID=room["id_room"];
      }, false);
      k++;
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
    }
    p++;

  }
  jj[p].innerHTML="";
  p++;

}



document.addEventListener('DOMContentLoaded', function(){
  cargarHabitaciones();

});

export var variableID = "" ;
export var variableLink = "https://sadminhoteles.pythonanywhere.com/api/check_rooms/5/"+xJS.variable ;

localStorage.setItem('link', "https://sadminhoteles.pythonanywhere.com/api/check_rooms/5/"+xJS.variable);