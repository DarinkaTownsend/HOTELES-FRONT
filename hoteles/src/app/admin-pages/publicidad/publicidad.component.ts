import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';


@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {
  publicidad:any=""
  dat:any=""
  constructor(private usu:UsuariosService) { }

  ngOnInit(): void {
    fetch("https://sadminhoteles.pythonanywhere.com/api/publicidad/")
      .then(res => res.json())
      .then(publicidades => {
        console.log(publicidades)
        let tbody = document.getElementById("ordenes_tablas")

              if (tbody) {
                tbody.innerHTML = "";

                for(let publicidad of publicidades){
                  let row =
                    `<tr>

                      <td><button class="boton" type="submit" routerLink="/reservar">Extender</button></td>
                      <td><button class="boton" type="submit" routerLink="/reservar">Agregar Cargo</button></td>
                      <td><button class="boton" type="submit" routerLink="/reservar">Cancelar Reserva</button></td>


                    </tr>`
                  tbody.innerHTML += row;
                }

              }
      })


  }

}
