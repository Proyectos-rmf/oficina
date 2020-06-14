import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  public isLogged = false;

  // tslint:disable-next-line: variable-name
  app_name = 'Empresa';

}
