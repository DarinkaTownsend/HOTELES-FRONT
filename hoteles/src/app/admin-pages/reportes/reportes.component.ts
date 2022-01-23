import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  idU:any=""
  estado:any=""

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



                  let row =
                    `<tr>
                      <td>${punto["id_punt"]}</td>
                      <td>${punto["user"]}</td>
                      <td>${punto["puntu"]}</td>


                    </tr>`
                  tbody.innerHTML += row;
                }

              }
      })
  }


}

