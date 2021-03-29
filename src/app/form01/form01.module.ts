import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Form01PageRoutingModule } from './form01-routing.module';

import { Form01Page } from './form01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Form01PageRoutingModule
  ],
  declarations: [Form01Page]
})
export class Form01PageModule {}
