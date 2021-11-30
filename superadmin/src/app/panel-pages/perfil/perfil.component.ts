import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service'


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public nombresC: string = '';
  public apellidosC: string = '';
  public correoC: string = '';
  public usuarioC: string = '';


  constructor(private usuariosService : UsuariosService) { }

  ngOnInit(): void {
    var dat = localStorage.getItem("datosF2")||"{}"
    var json2= JSON.parse(dat)
    console.log("aqui")
    console.log(json2.user)

    this.nombresC = json2.user.first_name;
    this.apellidosC = json2.user.last_name;
    this.correoC = json2.user.email;
    this.usuarioC= json2.user.username
  }



}
