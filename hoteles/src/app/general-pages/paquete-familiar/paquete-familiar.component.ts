import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paquete-familiar',
  templateUrl: './paquete-familiar.component.html',
  styleUrls: ['./paquete-familiar.component.css']
})
export class PaqueteFamiliarComponent implements OnInit {
  personas:any=""
  constructor() { }

  ngOnInit(): void {

  }

  paqueteTurismo(){
    localStorage.setItem("turismoPaquete","Paquete Familiar");
    localStorage.setItem("CostoPaquete","150");
    var e2 = document.getElementById("02")as HTMLInputElement;
    this.personas=e2.value
    localStorage.setItem("Personas",this.personas);
  }

}
