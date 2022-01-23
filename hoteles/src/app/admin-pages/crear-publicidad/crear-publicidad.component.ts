import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-publicidad',
  templateUrl: './crear-publicidad.component.html',
  styleUrls: ['./crear-publicidad.component.css']
})
export class CrearPublicidadComponent implements OnInit {
  detalle:any="";
  servicio:any="";
  costo:any="";
  fecha_creada:any="";
  fecha_fin:any=""
  constructor(private usuario:UsuariosService, private router:Router) { }

  ngOnInit(): void {
  }

  crearPublicidad(){
    var e1 = document.getElementById("01")as HTMLInputElement;
    this.servicio=e1.value;

    var e2 = document.getElementById("02")as HTMLInputElement;
    this.detalle=e2.value;

    var e3 = document.getElementById("03")as HTMLInputElement;
    this.detalle=e3.value;

    let cuerpo={
      "hotel": 5,
      'servicio': this.servicio,
      'detalle': this.detalle,
      'costo_pub':this.costo,
      'publicidad_date': this.fecha_creada,
      'publicidad_ends_at':this.fecha_fin,
      'estado':"Activa"

    }

    this.usuario.AgregarPublicidad(cuerpo).subscribe(

      res  => {
        Swal.fire({
          title:"Cargo Agregado",
          text:"¡Se ha cambiado el costo de la reserva!",
          icon:"success",
          confirmButtonColor:"#3085d6",
          confirmButtonText:"Cerrar"
        })
        this.router.navigateByUrl("admin/publicidad");
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
