import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paquete-pareja',
  templateUrl: './paquete-pareja.component.html',
  styleUrls: ['./paquete-pareja.component.css']
})
export class PaqueteParejaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  paqueteTurismo(){
    localStorage.setItem("turismoPaquete","Paquete Pareja");
    localStorage.setItem("CostoPaquete","300");
  }

}
