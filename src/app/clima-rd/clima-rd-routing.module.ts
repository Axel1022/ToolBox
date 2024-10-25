import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClimaRdPage } from './clima-rd.page';

const routes: Routes = [
  {
    path: '',
    component: ClimaRdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimaRdPageRoutingModule {}
