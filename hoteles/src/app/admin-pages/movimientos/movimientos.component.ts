import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  idReserva:any=""
  cargo:any=0;
  constructor() { }

  ngOnInit(): void {
    this.idReserva=localStorage.getItem("idBooking")
    this.cargo=localStorage.getItem("precioCuarto")
  }
  terminar(){

  }

}
