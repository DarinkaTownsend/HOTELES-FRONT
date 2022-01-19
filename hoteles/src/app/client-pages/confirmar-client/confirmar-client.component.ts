import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-confirmar-client',
  templateUrl: './confirmar-client.component.html',
  styleUrls: ['./confirmar-client.component.css']
})
export class ConfirmarClientComponent implements OnInit {
  habitacion:any="";
  precio:any="";
  constructor() { }

  ngOnInit(): void {
  }

  Finalizar(){
    Swal.fire({
      title:"Reserva realizada",
      text:"¡Gracias por su compra!",
      icon:"success",
      confirmButtonColor:"#3085d6",
      confirmButtonText:"Cerrar"
    })
  }
}
