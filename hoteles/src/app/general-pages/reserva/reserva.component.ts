import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  rooms: any=[];

  constructor() { }

  ngOnInit(): void {
    fetch("http://127.0.0.1:8000/api/room_types/1")
            .then(data => data.json())
            .then(data => {

              this.rooms=data
              console.log(this.rooms)
                for(let room of this.rooms){
                  let titulo = document.getElementsByClassName('card-text te');
                  titulo[0].textContent  = "Personas: "+room["personas"]+" ";
                  titulo[1].textContent  = "Camas: "+room["cama"]+" ";
                  
                  if(room["desayuno"]){
                    titulo[2].textContent  = "Desayuno: Sí";
                  }else{
                    titulo[2].textContent  = "Desayuno: No";
                  }
                  titulo[3].textContent  = "Cocina: "+room["cocina"]+" ";
                  
                  if(room["wifi"]){
                    titulo[4].textContent  = "Wifi: Sí";
                  }else{
                    titulo[4].textContent  = "Wifi: No";
                  }
                  if(room["lavanderia"]){
                    titulo[5].textContent  = "Lavanderia: Sí";
                  }else{
                    titulo[5].textContent  = "Lavanderia: No";
                  }
                  let titulo2 = document.getElementsByClassName('card-text');
                  titulo[0].textContent  = room["description"];
                }
              

            });
  }

}
