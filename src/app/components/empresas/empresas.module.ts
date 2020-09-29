import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasComponent } from './empresas/empresas.component';
import { LoginComponent } from '../../components/core/admin/login/login.component';
import { DetalleEmpresaComponent } from './detalle-empresa/detalle-empresa.component';
import { OrganizacionComponent } from './empresas/organizacion/organizacion.component';
// import { ElegirComponent } from './empresas/organizacion/elegir.component';
import { BusquedaComponent } from './empresas/organizacion/busqueda/busqueda.component';
import { BuscarPipe } from '../../pipes/buscar.pipe';


@NgModule({
  declarations: [
    EmpresasComponent,
    LoginComponent,
    DetalleEmpresaComponent,
    OrganizacionComponent,
    // ElegirComponent,
    BusquedaComponent,
    BuscarPipe],
  imports: [CommonModule, EmpresasRoutingModule, ReactiveFormsModule, FormsModule]
})
export class EmpresasModule { }
