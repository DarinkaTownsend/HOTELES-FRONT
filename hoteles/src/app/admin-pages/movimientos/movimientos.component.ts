import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Detalle } from '../Interfaces_admin/detalle';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  idReserva:any=""
  cargo:any=0;
  detalleT:any=[]
  nombreR:any=""
  apellidoR:any=""
  fe:any=""
  idCuartoD:any=""
  fechaReserva:any=""
  costoHabitacion:any=""
  fechaR:any=""
  precioCuarto:any=0
  constructor(private usuario:UsuariosService) { }

  ngOnInit(): void {
    this.idReserva=localStorage.getItem("idBooking")
    this.cargo=localStorage.getItem("precioCuarto")
    this.nombreR=localStorage.getItem("nombreReser")
    this.apellidoR=localStorage.getItem("apellidoReserva")
    this.idCuartoD=localStorage.getItem("idCuartoD")
    this.fechaR=localStorage.getItem("fechaReserva")
    this.precioCuarto=localStorage.getItem("precioCuarto")

    fetch("https://sadminhoteles.pythonanywhere.com/api/detalle_reserva/"+this.idReserva)
      .then(res => res.json())
      .then(detalles => {
        console.log(detalles)
        let det_todo:Detalle
        for(let det of detalles){
          this.fe=det["fecha_detalle"].slice(0,10)

                  det_todo={

                    booking:det["booking"],
                    titulo_detalle:det["titulo_detalle"],
                    detalle:det["detalle"],
                    fecha_detalle:this.fe,
                    costo:det["costo_detalle"]


                  }

                  this.detalleT.push(det_todo)


        }
      })



      fetch("https://sadminhoteles.pythonanywhere.com/api/get_room/"+this.idCuartoD)
      .then(res => res.json())
      .then(cuartos => {
        this.costoHabitacion=cuartos[0]["seats_base"]
    })


  }
  terminar(){

  }

}
