import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extender-reserva',
  templateUrl: './extender-reserva.component.html',
  styleUrls: ['./extender-reserva.component.css']
})
export class ExtenderReservaComponent implements OnInit {
  idReserva:any=""
  fechaR:any=""
  constructor() { }

  ngOnInit(): void {
    this.idReserva=localStorage.getItem("idBooking")
    this.fechaR=localStorage.getItem("fechaReserva")
  }

  cambiarFecha(){

  }

}
