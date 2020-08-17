import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UtilService } from './../../services/util.service';
import { CrudService } from '../empresas.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-empresa',
  templateUrl: './detalle-empresa.component.html',
  styleUrls: ['./detalle-empresa.component.css']
})
export class DetalleEmpresaComponent implements OnInit {
  empresaForm = this.fb.group({
    nombre_Emp: ['', [Validators.required, Validators.minLength(3)]],
    calle_Emp: ['', [Validators.required, Validators.minLength(3)]],
    colonia_Emp: ['', [Validators.required, Validators.minLength(3)]],
    ciudad_Emp: ['', [Validators.required, Validators.minLength(3)]],
    estado_Emp: ['', [Validators.required, Validators.minLength(3)]],
    cp_Emp: ['', [ Validators.required, Validators.minLength(5), Validators.pattern('^[0-9]*$') ] ],
    telefono_Emp: ['', [ Validators.required, Validators.minLength(5), Validators.pattern('^[0-9]*$') ] ],
  });

  public datos: any[][];
  public Empresa$ = this.UTIL.ApuntadorAction$;
  public Error;

  constructor(private UTIL: UtilService, private fb: FormBuilder, private crudApi: CrudService ) { }

  ngOnInit(): void {
     this.Empresa$.subscribe(res => { this.datos = res; });
     if (this.datos) { this.imprimir_datos(1); }
  }

  imprimir_datos(valor: number) {
    switch (valor) {
      case 1:
        const empresa = {
          nombre_Emp: this.datos[1][0],
          calle_Emp: this.datos[1][1],
          colonia_Emp: this.datos[1][2],
          ciudad_Emp: this.datos[1][4],
          estado_Emp: this.datos[1][5],
          cp_Emp: this.datos[1][3],
          telefono_Emp: this.datos[1][6]
        };

        this.empresaForm.setValue(empresa);
        console.log(this.datos);
        break;

      default:
        break;
    }
  }

  onSubmit(): void {
    const ipAPI = '//api.ipify.org?format=json';

    swal.queue([{
      allowOutsideClick: false,
      allowEscapeKey: false,
      title: 'Guardando Información ...',
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      onOpen: () => {
        swal.showLoading();
        return fetch(ipAPI)
          .then(data => {
              swal.hideLoading();
              if (data.statusText === 'OK') {
                this.crudApi.creaEmpresa(this.empresaForm.value, 'empresa')
                .then((res) => {
                  swal.fire({
                    icon: 'success',
                    title: 'Empresa Creada',
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    timer: 2000
                  });
                }).catch(err =>  {
                    console.log('err', err.message);
                  });
              }
          })
          .catch(() => {
              swal.hideLoading();
              swal.fire({
                icon: 'error',
                title: 'Favor de verificar el servidor o conexión a Internet!',
                allowOutsideClick: false,
                allowEscapeKey: false
              });
          });
      }
    }]);
  }

  isError(campo: string, tipo: string): string {
    this.Error = this.empresaForm.get(campo).errors;
    return this.UTIL.Errores(this.Error, tipo);
  }

  isValidField(name: string): boolean {
    const fieldName = this.empresaForm.get(name);
    return fieldName.invalid && fieldName.touched;
  }

  onPatchValue(): void {
    this.empresaForm.patchValue({ ciudad_Emp: 'Madrid' });
  }

  onReset(): void {
    this.empresaForm.reset();
  }
}
