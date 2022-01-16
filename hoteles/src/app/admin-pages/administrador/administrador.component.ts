import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  public usuario: any = '';
  constructor() { }

  ngOnInit(): void {
    var stringa = localStorage.getItem('username')
    this.usuario=stringa;
  }

}
