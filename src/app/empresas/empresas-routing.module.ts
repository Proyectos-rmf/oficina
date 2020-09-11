import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { HomeComponent } from '../core/home/home.component';
import { ElegirComponent } from './empresas/organizacion/elegir.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empresa', component: EmpresasComponent },
  { path: 'elegir', component: ElegirComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
