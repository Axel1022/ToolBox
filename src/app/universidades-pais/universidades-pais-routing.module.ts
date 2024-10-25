import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversidadesPaisPage } from './universidades-pais.page';

const routes: Routes = [
  {
    path: '',
    component: UniversidadesPaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversidadesPaisPageRoutingModule {}
