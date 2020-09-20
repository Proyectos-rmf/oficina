import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor() { }

  buscar = new FormControl('');

  ngOnInit(): void {
    console.log(this.buscar.valueChanges);
    // this.buscar.valueChanges.subscribe(value => this.buscarEmitter.emit(value));
    // console.log(this.buscar);
  }

  // @Output('buscar') buscarEmitter = new EventEmitter<string>();

}
