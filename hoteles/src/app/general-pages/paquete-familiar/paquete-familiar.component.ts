import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paquete-familiar',
  templateUrl: './paquete-familiar.component.html',
  styleUrls: ['./paquete-familiar.component.css']
})
export class PaqueteFamiliarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  paqueteTurismo(){
    localStorage.setItem("turismoPaquete","Paquete Familiar");
    localStorage.setItem("CostoPaquete","700");
  }

}
