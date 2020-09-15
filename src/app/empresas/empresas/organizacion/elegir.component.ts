import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-elegir',
  templateUrl: './elegir.component.html',
  styles: [
  ]
})
export class ElegirComponent implements OnInit {

  public datos = [];
  private Empresa$ = this.UTIL.ApuntadorAction$;

  constructor(private UTIL: UtilService) { }

  ngOnInit(): void {
    // if (this.datos) {
      this.obtentodo();
      console.log(this.datos[0]);
    // }
  }

  obtentodo() {
    this.Empresa$.subscribe(res => {
      return this.datos = res;
    });
  }

}
