import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Empresa } from './models/empresa';
import { CrudService } from './empresas/empresas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  Empresamodal: Empresa[];

  constructor(private crudApi: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.listaEmpresas('empresa');
  }

  listaEmpresas(coleccion: string) {
    this.crudApi.TodasEmpresas(coleccion).subscribe(data => {
      this.Empresamodal = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Empresa
        };
      });

      if (this.Empresamodal[0]?.id) {
        this.router.navigate(['empresas/empresa']);
      }
    });
  }
}

