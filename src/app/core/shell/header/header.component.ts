import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  public isLogged = false;

  // tslint:disable-next-line: variable-name
  app_name = 'EMPRESA';

  ngOnInit(): void {
  }

}
