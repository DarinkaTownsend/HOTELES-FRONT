import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  food=['1','2','3']
  constructor() { }

  ngOnInit(): void {
  }

  reservation(){
    //console.log(document.getElementById("calendario1"));
    console.log(document.querySelector("input[type=date]"));

  }
    opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';


  capturar() {
      // Pasamos el valor seleccionado a la variable verSeleccion
      this.verSeleccion = this.opcionSeleccionado;
      
      console.log( this.verSeleccion);
  }

 



}

export var variable = document.getElementsByClassName("cs-select cs-skin-border");
// var vv = variable[0].value;
export function myFunction() {
   var variable
   return variable // O lo que quieras hacer con tu funcion :D
}