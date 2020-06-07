import { Component } from '@angular/core';
import { Empresa } from '../../models/empresa';
//import { XlsService } from "../../services/xls.service";
import * as XLSX from 'xlsx';

type AOA = any[][];

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styles: []
})
export class EmpresasComponent {
  public data: AOA = [[1, 2], [3, 4]];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };

  //public XLSX: XlsService
  constructor() { }

  Empresas: Empresa = {
    nombre_Emp: '',
    calle_Emp: '',
    colonia_Emp: '',
    cp_Emp: 0,
    ciudad_Emp: '',
    Estado_Emp: '',
    telefono_Emp: 0
  }

  onFileChange(evt: any) {
    //this.XLSX.XLStoJSON(evt).subscribe(datos => this.datos = datos);
    //console.log(this.datos);

    /* Leer el Archivo */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('No se puede usar multiples archivos');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
    };
    reader.readAsBinaryString(target.files[0]);
    setTimeout(() => {
      this.imprimir_datos(1);
    }, 1000);
  }

  imprimir_datos(datos: number){
    //console.log(this.data);
    //console.log(this.data[0].length);
    //console.log(this.data[1].length);
    //console.log(this.data[1][1]);
    switch (datos) {
      case 1:
        this.Empresas.nombre_Emp   = this.data[1][0];
        this.Empresas.calle_Emp    = this.data[1][1];
        this.Empresas.colonia_Emp  = this.data[1][2];
        this.Empresas.cp_Emp       = this.data[1][3];
        this.Empresas.ciudad_Emp   = this.data[1][4];
        this.Empresas.Estado_Emp   = this.data[1][5];
        this.Empresas.telefono_Emp = this.data[1][6];

        console.log(this.Empresas);

        break;

      default:
        break;
    }
  }

}
