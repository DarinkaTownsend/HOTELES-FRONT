import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  miFormulario6: FormGroup;

  constructor(private usuariosService : UsuariosService,private router: Router) {
    this.miFormulario6 = new FormGroup({
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

  miSubmit() {
    console.log(this.miFormulario6.value);

    const elUser = {"username": this.miFormulario6.value.usuario,
                    "email" : this.miFormulario6.value.correo,
                    "password1": this.miFormulario6.value.contrasena,
                    "password2": this.miFormulario6.value.contrasena2,
    }
    this.usuariosService.addUsuarios(elUser).subscribe(
      res  => {
        var x= JSON.stringify(res)
        var y = JSON.parse(x)

        //console.log(y.message);
        Swal.fire({
          title: y.message,
          //text: y.message,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })


        //this.router.navigate(['/admin']);
      },
      err  => {
        console.log(err)
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
