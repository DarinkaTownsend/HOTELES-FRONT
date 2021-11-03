import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let arrow = document.querySelectorAll(".arrow")
    for(var i=0; i<arrow.length; i++){
      arrow[i].addEventListener("click", (e)=>{
        let arrowParent = (<HTMLElement>e.target).parentElement?.parentElement;
        arrowParent?.classList.toggle("showMenu")
      })
    }

    let body = document.querySelector("#layoutSidenav_content") as HTMLElement
    let sidenav = document.querySelector(".nav") as HTMLElement
    //let imagen = document.getElementById("logo") as HTMLElement
    sidenav?.addEventListener("mouseleave", ()=>{
      sidenav.style.width = "40px"
      body.style.marginLeft ="5%"
      //imagen.style.visibility="hidden"

      let menu = document.querySelectorAll(".showMenu")
      for(var i=0; i<menu.length; i++){
        menu[i]?.classList.toggle("showMenu")
      }

    })
    sidenav?.addEventListener("mouseover", ()=>{
      sidenav.style.width = "220px"
      body.style.marginLeft ="10%"
    })
  }

  //outSesion2(){
    //this.usuariosService.logout();
  //}

}
