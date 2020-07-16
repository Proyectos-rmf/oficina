import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasComponent } from './empresas/empresas.component';
import { LoginComponent } from '../core/admin/login/login.component';
import { DetalleEmpresaComponent } from './detalle-empresa/detalle-empresa.component';

@NgModule({
  declarations: [EmpresasComponent, LoginComponent, DetalleEmpresaComponent],
  imports: [CommonModule, EmpresasRoutingModule]
})
export class EmpresasModule { }
