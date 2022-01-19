import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-reservaciones',
  templateUrl: './mis-reservaciones.component.html',
  styleUrls: ['./mis-reservaciones.component.css']
})
export class MisReservacionesComponent implements OnInit {
  usuarioC:any=""
  constructor() { }

  ngOnInit(): void {
    this.usuarioC=localStorage.getItem("username")
  }

}
