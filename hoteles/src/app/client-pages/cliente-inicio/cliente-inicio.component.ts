import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-inicio',
  templateUrl: './cliente-inicio.component.html',
  styleUrls: ['./cliente-inicio.component.css']
})
export class ClienteInicioComponent implements OnInit {
  usuario:any=""
  constructor() { }

  ngOnInit(): void {
    this.usuario=localStorage.getItem("username")
  }

}
