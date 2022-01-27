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
  nuevaFechaE:any ="";
  nuevaFechaS:any ="";
  nuevoP:any ="";
  fecha: any = "";
  nuevaNoche: any=0;
  anteriorNoche: any=0;
  precioA: any=0;
  precioFinal:any=0;
  precioAgregar:any=0;
  fechaCalendario1: any=0;
  fechaCalendario2: any=0;
  fechaS:any=""
  constructor(private usuario:UsuariosService, private router:Router) { }

  ngOnInit(): void {
    this.idReserva=localStorage.getItem("idBooking")
    this.fechaR=localStorage.getItem("fechaReserva")
    
    fetch("https://sadminhoteles.pythonanywhere.com/api/bookings_hotel/5")
      .then(data => data.json())
      .then(habitaciones => {
        console.log(habitaciones)

        for(let habitacion of habitaciones){
          if(habitacion['id_booking']==this.idReserva){
            this.fechaCalendario1= new Date(habitacion['begin_at'].split("T")[0]).toISOString();
            this.fechaCalendario2= new Date(habitacion['ends_at'].split("T")[0]).toISOString();
            this.fechaS= habitacion['ends_at'].split("T")[0];
            let a= document.getElementById("calendario1");
            let b= document.getElementById("calendario2");
            if(a){ 
              a.setAttribute('min',this.fechaCalendario1);
            }
            if(b){ 
              b.setAttribute('min',this.fechaCalendario2);
            }
            let fechaReserva= document.getElementsByClassName("fechaR");
            fechaReserva[0].innerHTML = "Actual fecha de salida: "+habitacion['ends_at'].split("T")[0];
            let precioReserva= document.getElementsByClassName("precioAnterior");
            precioReserva[0].innerHTML = "Precio anterior: $ "+habitacion['costo_booking'];
            this.precioA = habitacion['costo_booking'];
            var fechaInicio = new Date(habitacion['begin_at'].split("T")[0]).getTime();
            var fechaFin    = new Date(habitacion['ends_at'].split("T")[0]).getTime();
            var diff = (fechaFin - fechaInicio)/(1000*60*60*24);
            let diasReserva= document.getElementsByClassName("diasReserva");
            diasReserva[0].innerHTML = "Noches de Reserva: "+diff;
            this.anteriorNoche = diff;
            let nombre= document.getElementsByClassName("container");
            nombre[0].innerHTML = "Extender reserva de "+localStorage.getItem("nombreReser")+" "+ localStorage.getItem("apellidoReserva");
            let boton= document.getElementById("boton")as HTMLInputElement;
            var date1 = new Date(habitacion['ends_at'].split("T")[0]);
            const tiempoTranscurrido = Date.now();
            var date2 = new Date(tiempoTranscurrido);
            if(date1 > date2){
              console.log("ffff");
            }
            if(date2 > date1){
              console.log(date1);
              console.log(date2);
              console.log("gggg");
              boton.disabled = true

            }
            /*let calendario= document.getElementsByClassName("fechas");
            var e1 = document.getElementById("calendario1")as HTMLInputElement;
            calendario[0].setAttribute("value", habitacion['begin_at'].split("T")[0]);
            calendario[1].setAttribute("value", habitacion['ends_at'].split("T")[0]);
            e1.value= habitacion['ends_at'].split("T")[0];*/

          }
        }


      });
  }
  obtenerF(valor: string){
    console.log(valor);
    this.nuevaFechaS=valor;


    if(this.nuevaFechaE==""){
      this.obtenerT(this.fechaR);
    }else{
    this.obtenerT(this.nuevaFechaE);
  }
    console.log(this.fechaR)

    this.nuevaFecha();

  }
  obtenerT(valor: string){
    console.log(valor);
    this.nuevaFechaE=valor;
  }
  nuevaFecha(){
    let fechaReserva= document.getElementsByClassName("fechaR");
    fechaReserva[0].innerHTML = "Actual fecha de salida: "+this.nuevaFechaS;
    var fechaInicio = new Date(this.nuevaFechaE).getTime();
    var fechaFin    = new Date(this.nuevaFechaS).getTime();
    var diff = (fechaFin - fechaInicio)/(1000*60*60*24);
    let diasReserva= document.getElementsByClassName("diasNuevos");
    diasReserva[0].innerHTML = "Actualización de noches: "+diff;
    this.nuevaNoche = diff;
    this.nuevoPrecio();
  }
  nuevoPrecio(){
    let totalanterior= ((this.precioA/this.anteriorNoche)*this.nuevaNoche).toFixed(0);
    let diasReserva= document.getElementsByClassName("precioNuevo");
    this.precioFinal=parseInt(this.precioA)+parseInt(totalanterior)
    this.precioAgregar=parseInt(totalanterior)
    diasReserva[0].innerHTML = "Nuevo precio: $ "+this.precioFinal;
  }
  cambiarFecha(){

    this.fechaCal=this.nuevaFechaS+" 00:00:00";
    console.log(this.fechaCal+"aqui")
    let enviar={
      "booking": parseInt(this.idReserva),
      "ends_at":this.fechaCal
    }

    this.usuario.ExtenderReserva(enviar).subscribe(


      res  => {

        const enviar={
          "booking": parseInt(this.idReserva),
          "costo_adicional": this.precioAgregar,
        }


        this.usuario.AgregarCargos(enviar).subscribe(

        res  => {

          Swal.fire({
                        title:"Se ha extendido la reserva",
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
