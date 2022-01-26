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
  constructor() { }

  ngOnInit(): void {
    this.idReserva=localStorage.getItem("idBooking")
    this.cargo=localStorage.getItem("precioCuarto")

    fetch("https://sadminhoteles.pythonanywhere.com/api/detalle_reserva/"+this.idReserva)
      .then(res => res.json())
      .then(detalles => {
        console.log(detalles)
        let det_todo:Detalle
        for(let det of detalles){

                  det_todo={

                    booking:det["booking"],
                    titulo_detalle:det["titulo_detalle"],
                    detalle:det["detalle"],
                    fecha_detalle:det["fecha_detalle"],
                    costo:det["costo"]


                  }

                  this.detalleT.push(det_todo)


        }
      })
  }
  terminar(){

  }

}
