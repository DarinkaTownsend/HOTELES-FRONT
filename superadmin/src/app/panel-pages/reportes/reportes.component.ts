import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  hoteles:any =[];
  constructor() { }

  ngOnInit(): void {

    fetch("http://127.0.0.1:8000/api/hotels/")
            .then(data => data.json())
            .then(data => {

              this.hoteles=data
              console.log(this.hoteles)

              let tbody = document.getElementById("inputGroupSelect01")

              if (tbody) {
                tbody.innerHTML = "";

                for(let hotel of this.hoteles){
                  let row =
                    `<option selected>${hotel["name"]}</option>`
                  tbody.innerHTML += row;
                }

              }

            });
  }

}
