import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  miFormulario5: FormGroup;

  constructor(private usuariosService : UsuariosService,private router: Router) {
      //se obtienen los datos del sign in
      this.miFormulario5 = new FormGroup({
        'usuario': new FormControl(),
        'contrasena': new FormControl()
      });
   }

  ngOnInit(): void {
  }



  miSubmit() {
    console.log(this.miFormulario5.value);
    console.log(this.miFormulario5 );
    const elUser = {"username": this.miFormulario5.value.usuario,
                    "email": "",
                    "password": this.miFormulario5.value.contrasena
    }

    this.usuariosService.login(elUser).subscribe(
      res  => {

        this.router.navigate(['./admin']);
      },
      err  => {
        //console.log(err.error.message)
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
