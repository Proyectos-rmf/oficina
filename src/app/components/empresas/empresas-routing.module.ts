import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { HomeComponent } from '../../components/core/home/home.component';
// import { ElegirComponent } from './empresas/organizacion/elegir.component';
import { BusquedaComponent } from './empresas/organizacion/busqueda/busqueda.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empresa', component: EmpresasComponent },
  { path: 'buscar', component: BusquedaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
