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
/*
      this.router.navigate(['/inicio']);
      fetch("https://sadminhoteles.pythonanywhere.com/api/authentication/login/"+elUser)
      .then(data=>data.json())
      .then(data=>{

        this.accesoU.access_token=data.access_token;
        this.accesoU.refresh_token=data.refresh_token;
        this.accesoU.user.username=data.user.username;
        this.accesoU.user.pk=data.user.pk;
        this.accesoU.user.email=data.user.email;
        this.accesoU.user.first_name=data.user.first_name;
        this.accesoU.user.last_name=data.user.last_name;

      })

      console.log(this.accesoU);












    fetch("http://sadminhoteles.pythonanywhere.com/api/user_type/"+this.accesoU.user.pk)
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


*/
}
}
