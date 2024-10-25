import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrediccionEdadPageRoutingModule } from './prediccion-edad-routing.module';

import { PrediccionEdadPage } from './prediccion-edad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrediccionEdadPageRoutingModule
  ],
  declarations: [PrediccionEdadPage]
})
export class PrediccionEdadPageModule {}
