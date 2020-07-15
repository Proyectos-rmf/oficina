import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../models/empresa';
import { XlsService } from '../../services/xls.service';
import { UtilService } from '../../services/util.service';

declare var $: any;

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  public datos: any[][];
  public XLSarr$ = this.XLSX.XLSAction$;
  public cargar = false;

  constructor(private XLSX: XlsService, private UTIL: UtilService) { }

  Empresas: Empresa = {
    nombre_Emp: '',
    calle_Emp: '',
    colonia_Emp: '',
    cp_Emp: 0,
    ciudad_Emp: '',
    Estado_Emp: '',
    telefono_Emp: 0
  };

  onFileChange(evt: any) {

    console.log('Entra');
    this.XLSX.XLStoJSON(evt).subscribe(datos => {
      setTimeout(() => {
        this.XLSarr$.subscribe(res => { this.datos = res; });
        console.log(this.datos);
        this.imprimir_datos(1);
        this.cargar = true;
      }, 100);
    });
  }

  ngOnInit(): void {
    this.Jquey();
  }

  imprimir_datos(datos: number) {
    // console.log(this.data);
    // console.log(this.data[0].length);
    // console.log(this.data[1].length);
    // console.log(this.data[1][1]);
    switch (datos) {
      case 1:
        this.Empresas.nombre_Emp   = this.datos[1][0];
        this.Empresas.calle_Emp    = this.datos[1][1];
        this.Empresas.colonia_Emp  = this.datos[1][2];
        this.Empresas.cp_Emp       = this.datos[1][3];
        this.Empresas.ciudad_Emp   = this.datos[1][4];
        this.Empresas.Estado_Emp   = this.datos[1][5];
        this.Empresas.telefono_Emp = this.datos[1][6];

        this.UTIL.Variables(this.Empresas);
        console.log(this.Empresas);
        break;

      default:
        break;
    }
  }

  Jquey() {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {

      $('#inputGroupFile').on('change', function(e) {
        const fileName = e.target.files[0].name;
        $(this).next('.custom-file-label').html(fileName);
      });

      $('#myToast').toast({ delay: 3000 });
      $('#myToast').toast('show');

      $('[data-toggle="popover"]').popover({
        placement : 'bottom',
        trigger: 'hover'
      });

    });
  }
}
