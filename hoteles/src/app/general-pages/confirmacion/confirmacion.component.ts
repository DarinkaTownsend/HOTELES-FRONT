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
  tipoHabitacion:any="";


  public cedula:String="";
  public nombre:String="";
  public apellido: String="";
  public email:String="";
  public direccion:String="";
  public nombreT:String="";
  public numeroT:String="";
  public fExp:String="";
  public CVV:String="";








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
    this.tipoHabitacion=localStorage.getItem("tipoHabitacion")
    this.precio=localStorage.getItem("precioH")

  }

  Finalizar(){

    var e1 = document.getElementById("cedula")as HTMLInputElement;
    var e2 = document.getElementById("nombre")as HTMLInputElement;
    var e3 = document.getElementById("apellido")as HTMLInputElement;
    var e4 = document.getElementById("direccion")as HTMLInputElement;
    var e5 = document.getElementById("correo")as HTMLInputElement;
    var e6 = document.getElementById("nombreT")as HTMLInputElement;
    var e7 = document.getElementById("numeroT")as HTMLInputElement;
    var e8 = document.getElementById("fExp")as HTMLInputElement;
    var e9 = document.getElementById("CVV")as HTMLInputElement;

    this.cedula=e1.value
    this.apellido=e3.value
    this.email=e5.value
    this.nombre=e2.value
    this.direccion=e4.value
    this.nombreT=e6.value
    this.numeroT=e7.value
    this.fExp=e8.value
    this.CVV=e9.value

    console.log(this.nombre)

    if(this.nombre==" "||this.apellido==" "||this.cedula==" "||this.direccion==""||this.email==""||this.numeroT==""||this.nombreT==" "||this.fExp==" "||this.CVV==" "){
      Swal.fire({
        title:"Formulario Incompleto",
        text:"¡Debe llenar todo los campos!",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"Cerrar"
      })
    }

    else if(!this.email.includes("@")){
      Swal.fire({
        title:"Email Inválido",
        text:"¡Ingrese su correo correctamente!",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"Cerrar"
      })
     }


    //Preguntamos si la cedula consta de 10 digitos
    else if(this.cedula.length == 10){

      //Obtenemos el digito de la region que sonlos dos primeros digitos
      var digito_region1 = this.cedula.substring(0,2);
      var digito_region=parseInt(digito_region1)

      //Pregunto si la region existe ecuador se divide en 24 regiones
      if( digito_region >= 1 && digito_region <=24 ){

        // Extraigo el ultimo digito
        var ultimo_digito   = parseInt(this.cedula.substring(9,10));

        //Agrupo todos los pares y los sumo
        var pares = parseInt(this.cedula.substring(1,2)) + parseInt(this.cedula.substring(3,4)) + parseInt(this.cedula.substring(5,6)) + parseInt(this.cedula.substring(7,8));

        //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
        var numero1 = parseInt(this.cedula.substring(0,1));

        var numero1 = (numero1 * 2);
        if( numero1 > 9 ){ var numero1 = (numero1 - 9); }

        var numero3 = parseInt(this.cedula.substring(2,3));
        var numero3 = (numero3 * 2);
        if( numero3 > 9 ){ var numero3 = (numero3 - 9); }

        var numero5 = parseInt(this.cedula.substring(4,5));
        var numero5 = (numero5 * 2);
        if( numero5 > 9 ){ var numero5 = (numero5 - 9); }

        var numero7 = parseInt(this.cedula.substring(6,7));
        var numero7 = (numero7 * 2);
        if( numero7 > 9 ){ var numero7 = (numero7 - 9); }

        var numero9 = parseInt(this.cedula.substring(8,9));
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
        if(digito_validador == ultimo_digito){
          console.log('la cedula:' + this.cedula + ' es correcta');
          Swal.fire({
            title:"Reserva realizada",
            text:"¡Gracias por su compra!",
            icon:"success",
            confirmButtonColor:"#3085d6",
            confirmButtonText:"Cerrar"
          })

        }else{
          console.log('la cedula:' + this.cedula + ' es incorrecta');
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
    }else if(this.cedula.length != 10){
      //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
      console.log('Esta cedula tiene menos de 10 Digitos');
      Swal.fire({
        title:"Cedula Incorrecta",
        text:"¡Ingrese su cedula correctamente!",
        icon:"error",
        confirmButtonColor:"#3085d6",
        confirmButtonText:"Cerrar"
      })

   }



  }



}
