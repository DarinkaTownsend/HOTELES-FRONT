import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';






@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  signupForm: FormGroup;
  data:any=[];
  accesoU={
    access_token: "",
    refresh_token: "",
    user: {
        pk: 0,
        username: "",
        email: "",
        first_name: "",
        last_name: ""
    }
}



  constructor(private _builer: FormBuilder,private router: Router,private usuariosService : UsuariosService){
      this.signupForm=this._builer.group({
        usuario: ['',Validators.required] ,
        contrasena:['',Validators.required] ,
      })
    }



  ngOnInit(): void {

  }


  mostrar(){
    var pass=document.getElementById("passwordF")

  }


  enviar(values: any) {
    const elUser = {"username":this.signupForm.value.usuario ,
                    "email":"" ,
                    "password": this.signupForm.value.contrasena
    }

    const elUser2 = {"username":this.signupForm.value.usuario ,
    "email":"" ,
    "password": this.signupForm.value.contrasena,
    "nombre":"",
    "apellido":"",
    "pk":0
    }

    if(this.signupForm.value.usuario==""||this.signupForm.value.contrasena==""){
      Swal.fire({
        title: "Contraseña o Usuario incorrecto",
        icon: 'error',
        confirmButtonText: 'Volver a intentar'
      })
    }else{

      console.log(this.data)
      this.usuariosService.login(elUser).subscribe(
        res  => {
          localStorage.setItem('datosF2',JSON.stringify(res));

          this.router.navigate(['/inicio']);
        },
        err  => {

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
