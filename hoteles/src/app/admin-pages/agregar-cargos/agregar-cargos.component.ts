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
  titulo:any=""
  detalle:any=""
  fechaHoy:any=""

  constructor(private usuario:UsuariosService, private router:Router) { }

  ngOnInit(): void {
    this.idReserva=localStorage.getItem("idBooking")

    this.fechaHoy=new Date().toISOString().slice(0,10)+" 00:00:00"
  }
  agregarCargos(){
    var e1 = document.getElementById("02")as HTMLInputElement;
    this.cargo=parseInt(e1.value);

    var e2 = document.getElementById("nombre")as HTMLInputElement;
    this.titulo=e2.value;

    var e3 = document.getElementById("comentario")as HTMLInputElement;
    this.detalle=e3.value;


    const enviar={
      "booking": parseInt(this.idReserva),
      "costo_adicional": parseInt(this.cargo),
    }

    const enviar2={
      "booking": parseInt(this.idReserva),
      "titulo_detalle": this.titulo,
      "detalle": this.detalle,
      "fecha_detalle": this.fechaHoy,
      "costo_detalle": parseInt(this.cargo)
    }

    if(this.titulo==""||this.detalle==""||this.cargo==""){
      Swal.fire({
        title:"Campos Incompletos",
        text:"¡Por favor llene los campos!",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"Cerrar"
      })


    }else{

    this.usuario.AgregarCargos(enviar).subscribe(



      res  => {

        this.usuario.AgregarDetalleCargo(enviar2).subscribe(


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

}
