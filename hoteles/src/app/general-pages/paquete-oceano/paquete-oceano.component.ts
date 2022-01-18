import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paquete-oceano',
  templateUrl: './paquete-oceano.component.html',
  styleUrls: ['./paquete-oceano.component.css']
})
export class PaqueteOceanoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  paqueteTurismo(){
    localStorage.setItem("turismoPaquete","Paquete Oceáno");
    localStorage.setItem("CostoPaquete","500");
  }

}
