import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  public isLogged = false;

  // tslint:disable-next-line: variable-name
  app_name = 'Empresa';

  constructor() { }

  ngOnInit(): void {
  }

}
