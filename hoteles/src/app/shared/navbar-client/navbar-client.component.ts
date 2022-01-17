import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.css']
})
export class NavbarClientComponent implements OnInit {

  constructor(private usuariosService : UsuariosService) { }

  ngOnInit(): void {
  }

  outSesion(){
    this.usuariosService.logout();
  }

}
