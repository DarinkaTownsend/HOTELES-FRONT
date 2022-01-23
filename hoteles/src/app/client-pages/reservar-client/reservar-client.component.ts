import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservar-client',
  templateUrl: './reservar-client.component.html',
  styleUrls: ['./reservar-client.component.css']
})
export class ReservarClientComponent implements OnInit {
  rooms: any = [];
  personask: any = "";
  constructor() { }

  nombreHS:any=""
  numeroPerS:any=""
  numeroCS:any=""
  desayunoS:any=""
  cocinaS:any=""
  wifiS:any=""
  lavadoraS:any=""
  precioS:any=""


  ngOnInit(): void {
    this.personask = localStorage.getItem('personask');

    this.nombreHS=localStorage.getItem("nombreHS")
    this.numeroPerS=localStorage.getItem("numeroPerS")
    this.numeroCS=localStorage.getItem("numeroCS")
    this.desayunoS=localStorage.getItem("desayunoS")
    this.cocinaS=localStorage.getItem("cocinaS")
    this.wifiS=localStorage.getItem("wifiS")
    this.lavadoraS=localStorage.getItem("lavadoraS")
    this.precioS=localStorage.getItem("precioS")

  }

}
