import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuariosService } from 'src/app/service/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cancelar-reserva',
  templateUrl: './cancelar-reserva.component.html',
  styleUrls: ['./cancelar-reserva.component.css']
})
export class CancelarReservaComponent implements OnInit {
  idReserva:any=""
  constructor(private usuario:UsuariosService, private router:Router) { }

  ngOnInit(): void {
    this.idReserva=localStorage.getItem("idBooking")
  }

  cancelarReserva(){
    var enviar={
      "booking": this.idReserva,
    }
    this.usuario.CancelarReserva(enviar).subscribe(

        res  => {
          Swal.fire({
            title:"Reserva cancelada",
            text:"¡Se ha cancelado la reserva exitosamente!",
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
