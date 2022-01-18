import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout-turismo',
  templateUrl: './checkout-turismo.component.html',
  styleUrls: ['./checkout-turismo.component.css']
})
export class CheckoutTurismoComponent implements OnInit {
  precio:any="";
  paquete:any="";
  constructor() { }

  ngOnInit(): void {
    this.paquete=localStorage.getItem("turismoPaquete");
    this.precio=localStorage.getItem("CostoPaquete");
  }

  Finalizar(){
    Swal.fire({
      title:"Compra realizada",
      text:"¡Para utilizar su paquete turístico presentar la cédula en el hotel!",
      icon:"success",
      confirmButtonColor:"#3085d6",
      confirmButtonText:"Cerrar"
    })
  }

}
