import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  rooms: any = [];

  constructor() { }

  ngOnInit(): void {
    fetch("http://127.0.0.1:8000/api/room_types/1")
      .then(data => data.json())
      .then(data => {

        this.rooms = data
        console.log(this.rooms)
        let contenedor = document.getElementsByClassName("container py-3");
        let plantillaCarta = `
        <div class="card">
        <div class="row ">

            <div class="col-md-7 px-3" id="carta">
                <div class="card-block px-6">
                    <h4 class="card-title">Habitación </h4>
                    <p class="card-text">
                        Habitación de lujo. Incluye todas las comodidades
                    </p>
                    <div class="fila1">
                        <div class="sec">
                            <img src="../../../assets/equipo.png" width="50px" height="50px">
                            <p class="card-text te"></p>
                        </div>

                        <div class="sec">
                            <img src="../../../assets/cama.png" width="50px" height="50px">
                            <p class="card-text te"></p>
                        </div>

                        <div class="sec">
                            <img src="../../../assets/taza-de-cafe.png" width="50px" height="50px">
                            <p class="card-text te">Desayuno: Sí</p>
                        </div>

                    </div>


                    <div class="fila1">
                        <div class="sec">
                            <img src="../../../assets/cocina.png" width="50px" height="50px">
                            <p class="card-text te"></p>
                        </div>

                        <div class="sec te">
                            <img src="../../../assets/wifi.png" width="50px" height="50px">
                            <p class="card-text te"></p>
                        </div>

                        <div class="sec te">
                            <img src="../../../assets/lavanderia.png" width="50px" height="50px">
                            <label class="card-text te"></label>
                        </div>

                    </div>

                    <div id="reser">
                        <label class="textoP">Precio: $100</label>
                        <a href="#" class="boton" routerLink="../reservar">Reservar</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item active">
                <img class="d-block" src="../../../assets/h2.jpg" width="500px" height="400px" alt="">
            </div>

            <!-- End of carousel -->
        </div>
    </div>

        `
        for (let room of this.rooms) {
          /*
          let titulo = document.getElementsByClassName('card-text te');
          titulo[0].textContent = "Personas: " + room["personas"] + " ";
          titulo[1].textContent = "Camas: " + room["cama"] + " ";

          if (room["desayuno"]) {
            titulo[2].textContent = "Desayuno: Sí";
          } else {
            titulo[2].textContent = "Desayuno: No";
          }
          titulo[3].textContent = "Cocina: " + room["cocina"] + " ";

          if (room["wifi"]) {
            titulo[4].textContent = "Wifi: Sí";
          } else {
            titulo[4].textContent = "Wifi: No";
          }
          if (room["lavanderia"]) {
            titulo[5].textContent = "Lavanderia: Sí";
          } else {
            titulo[5].textContent = "Lavanderia: No";
          }*/
          contenedor[0].innerHTML += plantillaCarta;
          
        }


      });
  }

  reservation() {
    //console.log(document.getElementById("calendario1"));
    console.log(document.querySelector("input[type=date]"));



  }

}
