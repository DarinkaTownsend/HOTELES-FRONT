import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  miFormulario2: FormGroup;
  miFormulario: FormGroup;


  constructor(private usuariosService : UsuariosService,private router: Router) {

    //se obtienen los datos del sign in
    this.miFormulario = new FormGroup({
      'usuario': new FormControl(),
      'contrasena': new FormControl()
    });

    // se obtienen los datos del sing up
    this.miFormulario2 = new FormGroup({
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

  // envian los datos al backend del sing up

  miSubmit2() {
    console.log(this.miFormulario2.value);

    const elUser = {"username": this.miFormulario2.value.usuario,
                    "first_name": this.miFormulario2.value.name,
                    "last_name": this.miFormulario2.value.apellido,
                    "password": this.miFormulario2.value.contrasena,
                    "email" : this.miFormulario2.value.correo
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
        /*Swal.fire({
          title: 'Error!',
          text: err.error.message,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })*/
      }


    )

  }




  miSubmit() {
    //console.log(this.miFormulario.value);
    //console.log(this.miFormulario );
    const elUser = {"usuario": this.miFormulario.value.usuario,
                    "contrasena": this.miFormulario.value.contrasena
    }

    this.usuariosService.login(elUser).subscribe(
      res  => {
        localStorage.setItem('user',JSON.stringify(res));
        //console.log(res);
        var stringa = localStorage.getItem('username') || '{}'
        var json = JSON.parse(stringa)
        if(json.role='Usuario'){
          this.router.navigate(['/client']);
        }
        else{
          this.router.navigate(['/admin']);
        }
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
