import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Form02PageRoutingModule } from './form02-routing.module';

import { Form02Page } from './form02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Form02PageRoutingModule
  ],
  declarations: [Form02Page]
})
export class Form02PageModule {}
