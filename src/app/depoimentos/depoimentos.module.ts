import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepoimentosPageRoutingModule } from './depoimentos-routing.module';

import { DepoimentosPage } from './depoimentos.page';
import * as $ from "jquery";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepoimentosPageRoutingModule
  ],
  declarations: [DepoimentosPage]
})
export class DepoimentosPageModule {}
