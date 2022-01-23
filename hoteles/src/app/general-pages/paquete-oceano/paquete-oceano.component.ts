import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paquete-oceano',
  templateUrl: './paquete-oceano.component.html',
  styleUrls: ['./paquete-oceano.component.css']
})
export class PaqueteOceanoComponent implements OnInit {
  personas:any=""
  constructor() { }

  ngOnInit(): void {
  }
  paqueteTurismo(){
    localStorage.setItem("turismoPaquete","Paquete Oceáno");
    localStorage.setItem("CostoPaquete","500");
    var e2 = document.getElementById("02")as HTMLInputElement;
    this.personas=e2.value
    localStorage.setItem("Personas",this.personas);
  }

}
