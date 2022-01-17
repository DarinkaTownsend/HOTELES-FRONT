import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  public nombresC: any = '';
  public apellidosC: string = '';
  public correoC: string = '';
  public usuarioC: any = '';


  constructor(private usuariosService : UsuariosService) { }

  ngOnInit(): void {
    var dat = localStorage.getItem("username")


    this.usuarioC= dat
  }




}
