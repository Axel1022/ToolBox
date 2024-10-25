import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaPrincipalPageRoutingModule } from './vista-principal-routing.module';

import { VistaPrincipalPage } from './vista-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaPrincipalPageRoutingModule
  ],
  declarations: [VistaPrincipalPage]
})
export class VistaPrincipalPageModule {}
