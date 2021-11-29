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
  usuario_viejos:any =[];
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



  miSubmit2() {
    console.log(this.miFormulario5.value);
    console.log(this.miFormulario5 );
    const elUser = {"usuario": this.miFormulario5.value.usuario,
                    "email": "",
                    "password": this.miFormulario5.value.contrasena,
                    "is_client": false,
    }

    if(elUser.usuario!="darinka2000"){
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }else{



    fetch("http://127.0.0.1:8000/api/user_type/"+elUser.usuario)
    .then(data=>data.json())
      .then(data=>{
        this.usuario_viejos=data;
        console.log(elUser.usuario);
      })

    this.usuariosService.login(elUser).subscribe(
      res  => {
        if(this.usuario_viejos.is_client==false){

          this.router.navigate(['./admin']);
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

}
