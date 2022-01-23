import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/service/usuarios.service';


@Component({
  selector: 'app-puntuar',
  templateUrl: './puntuar.component.html',
  styleUrls: ['./puntuar.component.css']
})
export class PuntuarComponent implements OnInit {

  public nombresC: any = '';
  public apellidosC: string = '';
  public correoC: string = '';
  public usuarioC: any = '';
  public idC: any = '';

  public servicioCliente:Number=0;
  public tratoEmpleados:Number=0;
  public calidadAlimentos:Number=0;
  public instalaciones:Number=0;
  public habitacion:Number=0;
  public limpieza:Number=0;

  public promedio:Number=0;

  constructor(private router:Router, private usuario:UsuariosService) { }

  ngOnInit(): void {
    var dat = localStorage.getItem("username")
    this.usuarioC= dat
    this.idC=localStorage.getItem("idC")



  }

  enviarForm(){

    var e1 = document.getElementById("01")as HTMLInputElement;
    var e2 = document.getElementById("02")as HTMLInputElement;
    var e3 = document.getElementById("03")as HTMLInputElement;
    var e4 = document.getElementById("04")as HTMLInputElement;
    var e5 = document.getElementById("05")as HTMLInputElement;
    var e6 = document.getElementById("06")as HTMLInputElement;


    var servicioCliente=parseInt(e1.value);
    var tratoEmpleados=parseInt(e2.value);
    var calidadAlimentos=parseInt(e3.value);
    var instalaciones=parseInt(e4.value);
    var habitacion=parseInt(e5.value);
    var limpieza=parseInt(e6.value);

    if(servicioCliente>5||servicioCliente<0){
      Swal.fire({
        title:"Calificación Incorrecta",
        text:"Servicio al cliente no válido",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"cambiar"


      })
    }else if(tratoEmpleados>5||tratoEmpleados<0){
      Swal.fire({
        title:"Calificación Incorrecta",
        text:"Trato Empleados no válido",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"cambiar"


      })
    }else if(calidadAlimentos>5||calidadAlimentos<0){
      Swal.fire({
        title:"Calificación Incorrecta",
        text:"Calidad de alimentos no válido",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"cambiar"


      })
    }else if(instalaciones>5||instalaciones<0){
      Swal.fire({
        title:"Calificación Incorrecta",
        text:"instalaciones no válido",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"cambiar"


      })
    }else if(habitacion>5||habitacion<0){
      Swal.fire({
        title:"Calificación Incorrecta",
        text:"Habitacion no válido",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"cambiar"


      })
    }else if(limpieza>5||limpieza<0){
      Swal.fire({
        title:"Calificación Incorrecta",
        text:"Limpieza no válida",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"cambiar"


      })
    }else{
      this.promedio=(servicioCliente+tratoEmpleados+calidadAlimentos+instalaciones+habitacion+limpieza)/6;
      console.log(this.promedio)





      let cuerpo=
        {
          'hotel': 5,
          'user': this.idC,
          'puntu': this.promedio
      }
      this.usuario.AgregarPuntuacion(cuerpo).subscribe(

        res  => {
          Swal.fire({
            title:"Puntuación de Hotel Enviada",
            text:"¡Gracias por calificarnos!",
            icon:"success",
            confirmButtonColor:"#3085d6",
            confirmButtonText:"Cerrar"
          })

          this.router.navigateByUrl("client/inicio");
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


