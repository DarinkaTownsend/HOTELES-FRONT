import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paquete-pareja',
  templateUrl: './paquete-pareja.component.html',
  styleUrls: ['./paquete-pareja.component.css']
})
export class PaqueteParejaComponent implements OnInit {
  personas:any=""
  constructor() { }

  ngOnInit(): void {
  }

  paqueteTurismo(){
    localStorage.setItem("turismoPaquete","Paquete Pareja");
    localStorage.setItem("CostoPaquete","300");
    var e2 = document.getElementById("02")as HTMLInputElement;
    this.personas=e2.value
    localStorage.setItem("Personas",this.personas);
  }

}
