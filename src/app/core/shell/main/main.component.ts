import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  public isLogged: boolean = false;

  app_name: string="Empresa";

  constructor() { }

  ngOnInit(): void {
  }

}
