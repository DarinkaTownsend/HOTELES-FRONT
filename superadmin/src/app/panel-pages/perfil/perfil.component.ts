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

    var stringa = localStorage.getItem('user') || '{}'
    var json = JSON.parse(stringa)
    //Imprime el username que esta guardado en el localStorage
    //console.log(json.username)
    var user =json.username;
    this.usuariosService.getUserClient(user).subscribe(
      res  => {

        var str = JSON.stringify(res)
        var json2= JSON.parse(str)

        this.nombresC = json2.nombres;
        this.apellidosC = json2.apellidos;
        this.correoC = json2.correo;
        this.usuarioC= json2.usuario
      },
      err  => {
        console.log(err)
      }
    )



  }

}
