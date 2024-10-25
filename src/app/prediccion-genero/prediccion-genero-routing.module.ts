import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrediccionGeneroPage } from './prediccion-genero.page';

const routes: Routes = [
  {
    path: '',
    component: PrediccionGeneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrediccionGeneroPageRoutingModule {}
