import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/service/usuarios.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  precio:any="";
  paquete:any="";
  precioT:any="";
  personas:any="";
  pagoC:any="";
  ruc:any="no"
  pasaporte:any="no"


  public cedula1:String="";
  public nombre1:String="";
  public apellido1: String="";
  public email1:String="";
  public direccion1:String="";
  public nombreT1:String="";
  public numeroT1:String="";
  public fExp1:String="";
  public CVV1:String="";

  cargo:any=0;
  idCuarto:any=""

  idReserva:any=""

  constructor(private router:Router,private usuario:UsuariosService) { }

  ngOnInit(): void {
    this.paquete=localStorage.getItem("turismoPaquete");
    this.precio=localStorage.getItem("CostoPaquete");
    this.personas=localStorage.getItem("Personas");
    this.cargo=localStorage.getItem("precioCuarto")
    this.idCuarto=localStorage.getItem("IDCuarto")

    this.precioT=parseInt(this.personas)*parseInt(this.precio)

    this.idReserva=localStorage.getItem("idBooking")


  }

  cargarMetodo(){
    console.log("aqui")
    var e2 = document.getElementById("Llenado");

    if(e2){
      let row =
                    `
                    <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Nombre en la tarjeta</label>
                  <input type="text" class="form-control" id="nombreT" placeholder="" required>


                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Número de Tarjeta</label>
                  <input type="number" class="form-control" id="numeroT" maxlength="16" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" placeholder="" required>

                </div>
              </div>
              <div class="row2">
                <div class="r1">
                  <label for="cc-expiration">Fecha de Expiración</label>
                  <input type="month" class="form-control" id="fExp" min="2022-01" placeholder="" required>

                </div>
                <div class="r1">
                  <label for="cc-expiration">CVV</label>
                  <input type="number" class="form-control" id="CVV" maxlength="3" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"  placeholder="" required>

                </div>
              </div>

              `
                    e2.innerHTML = row;

    }






  }

  Efectivo(){
    var e2 = document.getElementById("Llenado");

    if(e2){
      let row =
                    `
                    <hr>
                    <h4 class="efec">El pago se realiza en el hotel</h4>
                    <hr>

              `
                    e2.innerHTML = row;

    }

    this.pagoC="Correcto"
    }


  Finalizar(){

    var e1 = document.getElementById("cedula")as HTMLInputElement;
    var e2 = document.getElementById("nombre")as HTMLInputElement;
    var e3 = document.getElementById("apellido")as HTMLInputElement;
    var e4 = document.getElementById("direccion")as HTMLInputElement;
    var e5 = document.getElementById("correo")as HTMLInputElement;
    var e10 = document.getElementById("ruc")as HTMLInputElement;
    var pasaporte = document.getElementById("pasaporte")as HTMLInputElement;

    if(e10.checked){
      this.ruc="si"
      this.pasaporte="no"

    }else if(pasaporte.checked){
      this.pasaporte="si"
      this.ruc="no"
    }else{
      this.ruc="no"
      this.pasaporte="no"
    }


    this.cedula1=e1.value
    this.apellido1=e3.value
    this.email1=e5.value
    this.nombre1=e2.value
    this.direccion1=e4.value


    var e7 = document.getElementById("nombreT")as HTMLInputElement;
    var e8 = document.getElementById("numeroT")as HTMLInputElement;
    var e9 = document.getElementById("CVV")as HTMLInputElement;
    var fechaFormu = document.getElementById("fExp")as HTMLInputElement;

    if(e7 && e8 && e9&& fechaFormu){
      var nombreT=e7.value
      var numero=e8.value
      var cvv = e9.value
      this.fExp1=fechaFormu.value


      if(nombreT==""||numero.length!=16||cvv.length!=3||this.fExp1==""){
        this.pagoC="Incorrecto"
        console.log("nombre")
      }else{
        this.pagoC="Correcto"
        console.log("bien")
      }

    }







    if(this.nombre1==" "||this.apellido1==" "||this.cedula1==" "||this.direccion1==""||this.email1==""){
      Swal.fire({
        title:"Formulario Incompleto",
        text:"¡Debe llenar todo los campos!",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"Cerrar"
      })
    }

    else if(!this.email1.includes("@") || !this.email1.includes(".com")){
      Swal.fire({
        title:"Email Inválido",
        text:"¡Ingrese su correo correctamente!",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"Cerrar"
      })
     }


    else if(this.ruc=="si" && this.pagoC=="Correcto"){
      if(this.cedula1.length == 13){

        var enviar={
          "booking": this.idReserva,
        }
        this.usuario.CancelarReserva(enviar).subscribe(

            res  => {
              Swal.fire({
                title:"Pago realizado",
                icon:"success",
                confirmButtonColor:"#3085d6",
                confirmButtonText:"Cerrar"
              })

              this.router.navigateByUrl("/admin/reservaciones");
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

















      }else{
        Swal.fire({
          title:"RUC no válido",
          text:"¡Ingrese correctamente su RUC!",
          icon:"error",
          confirmButtonColor:"#3085d6",
          confirmButtonText:"Cerrar"
        })
      }
    }else if(this.pasaporte=="si" && this.pagoC=="Correcto"){


      var enviar={
        "booking": this.idReserva,
      }
      this.usuario.CancelarReserva(enviar).subscribe(

          res  => {
            Swal.fire({
              title:"Pago realizado",
              icon:"success",
              confirmButtonColor:"#3085d6",
              confirmButtonText:"Cerrar"
            })

            this.router.navigateByUrl("/admin/reservaciones");
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

    //Preguntamos si la cedula consta de 10 digitos
    else if(this.cedula1.length == 10 && this.pagoC=="Correcto"){

      //Obtenemos el digito de la region que sonlos dos primeros digitos
      var digito_region1 = this.cedula1.substring(0,2);
      var digito_region=parseInt(digito_region1)

      //Pregunto si la region existe ecuador se divide en 24 regiones
      if( digito_region >= 1 && digito_region <=24 ){

        // Extraigo el ultimo digito
        var ultimo_digito   = parseInt(this.cedula1.substring(9,10));

        //Agrupo todos los pares y los sumo
        var pares = parseInt(this.cedula1.substring(1,2)) + parseInt(this.cedula1.substring(3,4)) + parseInt(this.cedula1.substring(5,6)) + parseInt(this.cedula1.substring(7,8));

        //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
        var numero1 = parseInt(this.cedula1.substring(0,1));

        var numero1 = (numero1 * 2);
        if( numero1 > 9 ){ var numero1 = (numero1 - 9); }

        var numero3 = parseInt(this.cedula1.substring(2,3));
        var numero3 = (numero3 * 2);
        if( numero3 > 9 ){ var numero3 = (numero3 - 9); }

        var numero5 = parseInt(this.cedula1.substring(4,5));
        var numero5 = (numero5 * 2);
        if( numero5 > 9 ){ var numero5 = (numero5 - 9); }

        var numero7 = parseInt(this.cedula1.substring(6,7));
        var numero7 = (numero7 * 2);
        if( numero7 > 9 ){ var numero7 = (numero7 - 9); }

        var numero9 = parseInt(this.cedula1.substring(8,9));
        var numero9 = (numero9 * 2);
        if( numero9 > 9 ){ var numero9 = (numero9 - 9); }

        var impares = numero1 + numero3 + numero5 + numero7 + numero9;

        //Suma total
        var suma_total = (pares + impares);

        //extraemos el primero digito
        var primer_digito_suma = String(suma_total).substring(0,1);

        //Obtenemos la decena inmediata
        var decena = (parseInt(primer_digito_suma) + 1)  * 10;

        //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
        var digito_validador = decena - suma_total;

        //Si el digito validador es = a 10 toma el valor de 0
        if(digito_validador == 10)
          var digito_validador = 0;

        //Validamos que el digito validador sea igual al de la cedula
        if((digito_validador == ultimo_digito)){
          console.log('la cedula:' + this.cedula1 + ' es correcta');



          var enviar={
            "booking": this.idReserva,
          }
          this.usuario.CancelarReserva(enviar).subscribe(

              res  => {
                Swal.fire({
                  title:"Pago realizado",
                  icon:"success",
                  confirmButtonColor:"#3085d6",
                  confirmButtonText:"Cerrar"
                })

                this.router.navigateByUrl("/admin/reservaciones");
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



        else{
          console.log('la cedula:' + this.cedula1 + ' es incorrecta');
          Swal.fire({
            title:"Cedula Incorrecta",
            text:"¡Ingrese su cedula correctamente!",
            icon:"error",
            confirmButtonColor:"#3085d6",
            confirmButtonText:"Cerrar"
          })

        }

      }else{
        // imprimimos en consola si la region no pertenece
        console.log('Esta cedula no pertenece a ninguna region');
        Swal.fire({
          title:"Cedula Incorrecta",
          text:"¡Ingrese su cedula correctamente!",
          icon:"error",
          confirmButtonColor:"#3085d6",
          confirmButtonText:"Cerrar"
        })

      }
    }else if(this.cedula1.length != 10){
      //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
      console.log('Esta cedula tiene menos de 10 Digitos');
      Swal.fire({
        title:"Cedula Incorrecta",
        text:"¡Ingrese su cedula correctamente!",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"Cerrar"
      })

   }else if(this.pagoC!="Correcto"){
    Swal.fire({
      title:"Método de pago Incorrecto",
      text:"¡Ingrese correctamente sus datos!",
      icon:"error",
      confirmButtonColor:"#3085d6",
      confirmButtonText:"Cerrar"
    })

  }



  }


}
