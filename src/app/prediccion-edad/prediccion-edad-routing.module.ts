import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrediccionEdadPage } from './prediccion-edad.page';

const routes: Routes = [
  {
    path: '',
    component: PrediccionEdadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrediccionEdadPageRoutingModule {}
