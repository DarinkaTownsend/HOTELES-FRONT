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
    fetch("https://sadminhoteles.pythonanywhere.com/api/publicidad_hotel/5")
      .then(res => res.json())
      .then(publicidades => {
        console.log(publicidades)
        let tbody = document.getElementById("ordenes_tablas")

              if (tbody) {
                tbody.innerHTML = "";

                for(let publicidad of publicidades){
                  let row =
                    `<tr>
                      <td>${publicidad["id_public"]}</td>
                      <td>${publicidad["publicidad_date"].slice(0,10)}</td>
                      <td>${publicidad["servicio"]}</td>
                      <td>${publicidad["detalle"]}</td>
                      <td>${publicidad["costo_pub"]}</td>




                    </tr>`
                  tbody.innerHTML += row;
                }

              }
      })


  }

}
