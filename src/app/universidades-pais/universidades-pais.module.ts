import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversidadesPaisPageRoutingModule } from './universidades-pais-routing.module';

import { UniversidadesPaisPage } from './universidades-pais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversidadesPaisPageRoutingModule
  ],
  declarations: [UniversidadesPaisPage]
})
export class UniversidadesPaisPageModule {}
