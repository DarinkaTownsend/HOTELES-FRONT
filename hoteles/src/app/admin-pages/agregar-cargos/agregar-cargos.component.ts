import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-cargos',
  templateUrl: './agregar-cargos.component.html',
  styleUrls: ['./agregar-cargos.component.css']
})
export class AgregarCargosComponent implements OnInit {
  idReserva:any=""
  cargo:any=0;

  constructor(private usuario:UsuariosService) { }

  ngOnInit(): void {
    this.idReserva=localStorage.getItem("idBooking")
  }
  agregarCargos(){
    var e1 = document.getElementById("02")as HTMLInputElement;
    this.cargo=parseInt(e1.value);

    var enviar={
      "booking": this.idReserva,
      "costo_adicional": this.cargo
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
