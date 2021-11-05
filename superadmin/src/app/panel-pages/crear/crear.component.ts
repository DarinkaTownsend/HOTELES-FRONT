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
  hoteles:any =[];

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
    fetch("http://127.0.0.1:8000/api/hotels/")
            .then(data => data.json())
            .then(data => {

              this.hoteles=data
              console.log(this.hoteles)

              let tbody = document.getElementById("inputGroupSelect01")

              if (tbody) {
                tbody.innerHTML = "";

                for(let hotel of this.hoteles){
                  let row =
                    `<option selected>${hotel["name"]}</option>`
                  tbody.innerHTML += row;
                }

              }

            });
  }

  miSubmit() {


  }

}
