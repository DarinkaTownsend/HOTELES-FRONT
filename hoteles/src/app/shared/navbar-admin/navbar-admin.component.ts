import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';


@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private usuariosService : UsuariosService) { }

  ngOnInit(): void {
  }

  myFunction(){
    //console.log("XD logrrado XD");
    var x = document.getElementById("navbarsExample04")!;
    var y = document.getElementsByClassName("navbar-toggler")[0];
    if (x.className === "navbar-collapse collapse") {
      x.className += " show";
      y.setAttribute('aria-expanded', 'true');
    } else {
      x.className = "navbar-collapse collapse";
      y.setAttribute('aria-expanded', 'false');
    }


  }
  outSesion(){
    this.usuariosService.logout();
  }

}
