import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import{pipe,of} from 'rxjs';

//import{map,filter} from 'rxjs/operator';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  signupForm: FormGroup;
  data:any=[];
  caracU:any=[];
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
    console.log("campos vacios");
    Swal.fire({
      title: "Contraseña o Usuario incorrecto",
      icon: 'error',
      confirmButtonText: 'Volver a intentar'
    })
  }else if(this.signupForm.value.usuario=="darinka2000"||this.signupForm.value.usuario=="cliente02"){
    localStorage.setItem('username',this.signupForm.value.usuario);
    this.router.navigate(['/admin']);
    console.log("INGRESO ADMIN");


      /*this.usuariosService.login(elUser).subscribe(
        res  => {
          localStorage.setItem('datosF2',JSON.stringify(res));

          var dat = localStorage.getItem("datosF2")||"{}"
          var json2= JSON.parse(dat)
          console.log(json2.user)
          this.accesoU.access_token=json2.access_token;
          this.accesoU.user.first_name = json2.user.first_name;
          this.accesoU.user.last_name = json2.user.last_name;
          this.accesoU.user.email = json2.user.email;
          this.accesoU.user.username= json2.user.username
          this.accesoU.user.pk=json2.user.pk

          console.log(this.accesoU.access_token)
          if(this.accesoU.user.username=="superadmin"){

            console.log("entro");
            this.router.navigate(['../admin2']);

          }else{
            this.router.navigate(['../client']);
          }

        },
        err  => {

          Swal.fire({
            title: 'Error!',
            text: err.error.message,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }

      ) */

  }else if(this.signupForm.value.usuario=="jaime20" ||this.signupForm.value.usuario=="cliente01"){
    localStorage.setItem('username',this.signupForm.value.usuario);
    this.router.navigate(['/client/inicio']);
    console.log("INGRESO Cliente");
  }else{
    console.log("INGRESO NADIE");
    Swal.fire({
      title: "Contraseña o Usuario incorrecto",
      icon: 'error',
      confirmButtonText: 'Volver a intentar'
    })
  }

}



}
