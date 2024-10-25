import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasWordpressPageRoutingModule } from './noticias-wordpress-routing.module';

import { NoticiasWordpressPage } from './noticias-wordpress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasWordpressPageRoutingModule
  ],
  declarations: [NoticiasWordpressPage]
})
export class NoticiasWordpressPageModule {}
