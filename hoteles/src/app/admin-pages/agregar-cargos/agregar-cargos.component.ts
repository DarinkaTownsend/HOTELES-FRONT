import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cargos',
  templateUrl: './agregar-cargos.component.html',
  styleUrls: ['./agregar-cargos.component.css']
})
export class AgregarCargosComponent implements OnInit {
  idReserva:any=""
  cargo:any=0;

  constructor(private usuario:UsuariosService, private router:Router) { }

  ngOnInit(): void {
    this.idReserva=localStorage.getItem("idBooking")
  }
  agregarCargos(){
    var e1 = document.getElementById("02")as HTMLInputElement;
    this.cargo=parseInt(e1.value);

    const enviar={
      "booking": parseInt(this.idReserva),
      "costo_adicional": parseInt(this.cargo),
    }

    this.usuario.AgregarCargos(enviar).subscribe(

      res  => {
        Swal.fire({
          title:"Cargo Agregado",
          text:"¡Se ha cambiado el costo de la reserva!",
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
