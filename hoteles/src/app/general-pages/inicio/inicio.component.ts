import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  personak :any = 0;
  datos:any = [];
  fechaReservaS:any="";
  fechaCerrarS:any="";

  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  constructor() {
    this.datos = [1,2,3,4,5,7,8,9,10];
   }

  ngOnInit(): void {

  }





  capturar(){
  /* Para obtener el valor */
  var cod = document.getElementById("huespedes")as HTMLOptionElement


  var e1 = document.getElementById("calendario01")as HTMLInputElement;
  this.fechaReservaS=e1.value+" 00:00:00";

  var e2 = document.getElementById("calendario02")as HTMLInputElement;
  this.fechaCerrarS=e2.value+" 00:00:00";

  if(cod){
    var seleccion= cod.value
    localStorage.setItem("personak",seleccion)
    localStorage.setItem("fechaReservaS",this.fechaReservaS)
    localStorage.setItem("fechaCerrarS",this.fechaCerrarS)

  }

}

}

export var variable = "";
// var vv = variable[0].value;
