import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaPrincipalPage } from './vista-principal.page';

const routes: Routes = [
  {
    path: '',
    component: VistaPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaPrincipalPageRoutingModule {}
