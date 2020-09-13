import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-elegir',
  templateUrl: './elegir.component.html',
  styles: [
  ]
})
export class ElegirComponent implements OnInit {

  private datos: any[];
  private Empresa$ = this.UTIL.ApuntadorAction$;
  constructor(private UTIL: UtilService) { }

  ngOnInit(): void {
    this.Empresa$.subscribe(res => { this.datos = res; });
  }

}
