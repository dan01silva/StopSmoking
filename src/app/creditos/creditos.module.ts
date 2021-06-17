import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditosPageRoutingModule } from './creditos-routing.module';

import { CreditosPage } from './creditos.page';
import * as $ from "jquery";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditosPageRoutingModule
  ],
  declarations: [CreditosPage]
})
export class CreditosPageModule {}
