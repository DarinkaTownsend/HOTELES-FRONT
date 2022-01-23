import { Component, OnInit } from '@angular/core';

import { UsuariosService } from 'src/app/service/usuarios.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-extender-reserva',
  templateUrl: './extender-reserva.component.html',
  styleUrls: ['./extender-reserva.component.css']
})
export class ExtenderReservaComponent implements OnInit {
  idReserva:any=""
  fechaR:any=""
  fechaCal:any=""
  constructor(private usuario:UsuariosService) { }

  ngOnInit(): void {
    this.idReserva=localStorage.getItem("idBooking")
    this.fechaR=localStorage.getItem("fechaReserva")
  }

  cambiarFecha(){
    var e1 = document.getElementById("calendario1")as HTMLInputElement;
    this.fechaCal=e1.value+" 00:00:00";
    console.log(this.fechaCal)
    var enviar={
      "booking": this.idReserva,
      "costo_adicional": this.fechaCal
    }

    this.usuario.ExtenderReserva(enviar).subscribe(

      res  => {
        Swal.fire({
          title:"Fecha cambiada",
          text:"¡Se ha extendido la fecha!",
          icon:"success",
          confirmButtonColor:"#3085d6",
          confirmButtonText:"Cerrar"
        })
      },
      err  => {

        Swal.fire({
          title: 'Error!',
          text: err.error.message,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      }




    )

  }

}
