import { Component, OnInit } from '@angular/core';
//import M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }
  public correo: string = '';
  public password: string = '';
  public isError = false;

  ngAfterViewInit() {
    //var elems = document.querySelectorAll('.modal');
    //M.Modal.init(elems, { dismissible: false });

  }

  onLogin(){
    console.log("Correo     ", this.correo);
    console.log("Contraseña ", this.password);
  }

  ngOnInit(): void {
  }

}
