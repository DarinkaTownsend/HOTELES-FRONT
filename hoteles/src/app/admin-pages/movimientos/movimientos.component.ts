import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    this.idReserva=localStorage.getItem("idBooking")
    this.cargo=localStorage.getItem("precioCuarto")
    this.nombreR=localStorage.getItem("nombreReser")
    this.apellidoR=localStorage.getItem("apellidoReserva")

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
  }
  terminar(){

  }

}
