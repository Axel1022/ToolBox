import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasWordpressPage } from './noticias-wordpress.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasWordpressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasWordpressPageRoutingModule {}
