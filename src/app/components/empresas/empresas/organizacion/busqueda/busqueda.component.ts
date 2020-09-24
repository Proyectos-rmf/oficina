import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  private buscaSubject: Subject<string> = new Subject();

  public datos = [];
  private Empresa$ = this.UTIL.ApuntadorAction$;
  // tslint:disable-next-line: variable-name
  filtro_valor = '';

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

  // buscar = new FormControl('');
  // tslint:disable-next-line: variable-name

  // ngOnInit(): void {
    // this.buscar.valueChanges.pipe(
    //   debounceTime(300)
    // ).subscribe(value => this.filtro_valor = value);

    // console.log(this.buscar);
    // console.log(this.filtro_valor);
  // }

  public actualizarbusqueda(buscatexto: string) {
    this.filtro_valor = buscatexto;
    // this.buscaSubject.next(buscatexto);
    // this.fijarBuscarSubscription();
  }

  // @Output('buscar') buscarEmitter = new EventEmitter<string>();

  private fijarBuscarSubscription() {
    this.buscaSubject.pipe(
      debounceTime(100)
    ).subscribe((Valorbuscado: string) => {
      this.filtro_valor = Valorbuscado;
    });
    console.log(this.filtro_valor);
  }


}
