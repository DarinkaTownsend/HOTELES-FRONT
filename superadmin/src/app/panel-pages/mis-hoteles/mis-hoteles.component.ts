import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-hoteles',
  templateUrl: './mis-hoteles.component.html',
  styleUrls: ['./mis-hoteles.component.css']
})
export class MisHotelesComponent implements OnInit {
  hoteles:any =[];
  constructor() { }

  ngOnInit(): void {

            fetch("http://127.0.0.1:8000/api/hotels/")
            .then(data => data.json())
            .then(data => {

              this.hoteles=data
              console.log(this.hoteles)

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

            });



      }

}
