import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-mis-hoteles',
  templateUrl: './mis-hoteles.component.html',
  styleUrls: ['./mis-hoteles.component.css']
})

export class MisHotelesComponent implements OnInit {
  hoteles:any =[];


  public tokenC: string='';
  constructor(private usuariosService : UsuariosService) { }


  ngOnInit(): void {
    //obtengo el token
    var dat = localStorage.getItem("datosF2")||"{}"
    var json2= JSON.parse(dat)
    this.tokenC= json2.access_token
    console.log(this.tokenC)

  // obtengo los hoteles


  this.usuariosService.getHoteles(this.tokenC).subscribe(
    res  => {
      localStorage.setItem('Hoteles',JSON.stringify(res));
    },
    err  => {

    }

  )


/*
    console.log(this.hoteles)

    this.hoteles=data

    let tbody = document.getElementById("ordenes_tablas")
              if (tbody) {
                tbody.innerHTML = "";

                for(let hotel of this.hoteles){
                  let row =
                    `<tr>
                      <td>${hotel["id_hotel"]}</td>
                      <td>${hotel["name"]}</td>
                      <td>${hotel["address"]}</td>
                      <td>${hotel["create_at"]}</td>
                      <td>${hotel["update_at"]}</td>
                    </tr>`
                  tbody.innerHTML += row;
                }

              }
              */
      }

}
