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

  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  constructor() {
    this.datos = [1,2,3,4,5];
   }

  ngOnInit(): void {
    //document.getElementsByClassName("boton3")[0].addEventListener("click", this.capturar()) ;
  }

  reservation(){
    //console.log(document.getElementById("calendario1"));
    console.log(document.querySelector("input[type=date]"));

  }
   

  capturar() {
      // Pasamos el valor seleccionado a la variable verSeleccion
      this.verSeleccion = this.opcionSeleccionado;
      variable= this.opcionSeleccionado;
      localStorage.setItem("personak",variable);
      console.log( this.verSeleccion);
  }

}

export var variable = "";
// var vv = variable[0].value;
