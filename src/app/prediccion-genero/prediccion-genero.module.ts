import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrediccionGeneroPageRoutingModule } from './prediccion-genero-routing.module';

import { PrediccionGeneroPage } from './prediccion-genero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrediccionGeneroPageRoutingModule
  ],
  declarations: [PrediccionGeneroPage]
})
export class PrediccionGeneroPageModule {}
