import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasComponent } from './empresas/empresas.component';
import { LoginComponent } from '../core/admin/login/login.component';
import { DetalleEmpresaComponent } from './detalle-empresa/detalle-empresa.component';
import { OrganizacionComponent } from './empresas/organizacion/organizacion.component';

@NgModule({
  declarations: [EmpresasComponent, LoginComponent, DetalleEmpresaComponent, OrganizacionComponent],
  imports: [CommonModule, EmpresasRoutingModule, ReactiveFormsModule]
})
export class EmpresasModule { }
