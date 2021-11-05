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

  Reservar(){
    Swal.fire({
      title: 'Se ha realizado su reservación',
      //text: y.message,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
  }
}
