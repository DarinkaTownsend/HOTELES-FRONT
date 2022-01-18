import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {
  miFormulario3: FormGroup;

  habitacion:any="";
  precio:any="";

  constructor() {
    this.miFormulario3 = new FormGroup({
      'usuario': new FormControl(),
      'name': new FormControl(),
      'apellido': new FormControl(),
      'contrasena': new FormControl(),
      'contrasena2': new FormControl(),
      'correo': new FormControl()
    });

  }

  ngOnInit(): void {
  }

  Finalizar(){
    Swal.fire({
      title:"Reserva realizada",
      text:"¡Gracias por su compra!",
      icon:"success",
      confirmButtonColor:"#3085d6",
      confirmButtonText:"Cerrar"
    })
  }
}
