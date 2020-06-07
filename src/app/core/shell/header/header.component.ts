import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  public isLogged: boolean = false;

  app_name: string="Empresa";

  constructor() { }

  ngOnInit(): void {
  }

}
