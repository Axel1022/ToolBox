import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimaRdPageRoutingModule } from './clima-rd-routing.module';

import { ClimaRdPage } from './clima-rd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimaRdPageRoutingModule
  ],
  declarations: [ClimaRdPage]
})
export class ClimaRdPageModule {}
