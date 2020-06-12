import { Component, OnInit } from '@angular/core';
// import M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  constructor() { }
  public correo = '';
  public password = '';
  public isError = false;

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    // var elems = document.querySelectorAll('.modal');
    // M.Modal.init(elems, { dismissible: false });

  }

  onLogin() {
    console.log('Correo     ', this.correo);
    console.log('Contraseña ', this.password);
  }

  ngOnInit(): void {
  }

}
