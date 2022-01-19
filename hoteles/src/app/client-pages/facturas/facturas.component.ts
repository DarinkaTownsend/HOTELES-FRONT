import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  usuarioC:any=""

  constructor() { }

  ngOnInit(): void {
    this.usuarioC=localStorage.getItem("username")
  }

}
