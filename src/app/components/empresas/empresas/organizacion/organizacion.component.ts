import { Component, OnInit, HostListener } from '@angular/core';
import { XlsService } from '../../../../services/xls.service';
import { UtilService } from '../../../../services/util.service';

declare var $: any;

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styles: [
  ]
})
export class OrganizacionComponent implements OnInit {
  public datos: any[][];
  public XLSarr$ = this.XLSX.XLSAction$;
  public cargar = false;
  public desplegar = true;
  public mostrar = true;

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(e) {
  //  console.log(e);
  // }

  constructor(private XLSX: XlsService, private UTIL: UtilService) { }

  onFileChange(evt: any) {
    this.XLSX.XLStoJSON(evt).subscribe(datos => {
      setTimeout(() => {
        this.XLSarr$.subscribe(res => { this.datos = res; });
        this.UTIL.Variables(this.datos);
        this.cargar = true;
        this.desplegar = false;
      }, 100);
    });
  }

  ngOnInit(): void {
    this.Jquey();
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

      $('[data-toggle="popover"]').popover();

    });
  }
}
