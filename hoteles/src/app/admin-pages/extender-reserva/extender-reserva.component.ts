import { Component, OnInit } from '@angular/core';

import { UsuariosService } from 'src/app/service/usuarios.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-extender-reserva',
  templateUrl: './extender-reserva.component.html',
  styleUrls: ['./extender-reserva.component.css']
})
export class ExtenderReservaComponent implements OnInit {
  idReserva:any=""
  fechaR:any=""
  fechaCal:any=""
  constructor(private usuario:UsuariosService, private router:Router) { }

  ngOnInit(): void {
    this.idReserva=localStorage.getItem("idBooking")
    this.fechaR=localStorage.getItem("fechaReserva")

    fetch("https://sadminhoteles.pythonanywhere.com/api/bookings_hotel/5")
      .then(data => data.json())
      .then(habitaciones => {
        console.log(habitaciones)

        for(let habitacion of habitaciones){
        }


      });
  }

  cambiarFecha(){
    var e1 = document.getElementById("calendario1")as HTMLInputElement;
    this.fechaCal=e1.value+" 00:00:00";
    console.log(this.fechaCal)
    let enviar={
      "booking": parseInt(this.idReserva),
      "ends_at":this.fechaCal
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
        this.router.navigateByUrl("admin/reservaciones");
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
