import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  idU:any=""
  estado:any=""
  cantidad:any=0
  suma:any=0
  promedioC:any=0;
  nombre:any=""

  constructor() { }

  ngOnInit(): void {
    fetch("https://sadminhoteles.pythonanywhere.com/api/puntuaciones_hotel/5")
      .then(res => res.json())
      .then(puntuaciones => {
        console.log(puntuaciones)
        let tbody = document.getElementById("ordenes_tablas")

              if (tbody) {
                tbody.innerHTML = "";

                for(let punto of puntuaciones){

                  this.cantidad+=1
                  this.suma+=parseInt(punto["puntu"])

                  if(punto["user"]==4){
                    this.nombre="jaime20"
                  }else{
                    this.nombre="cliente01"
                  }


                  let row =
                    `<tr>
                      <td>${punto["id_punt"]}</td>
                      <td>${this.nombre}</td>
                      <td>${punto["puntu"]}</td>


                    </tr>`
                  tbody.innerHTML += row;
                }

                this.promedioC=this.suma/this.cantidad

              }
      })
  }


}

