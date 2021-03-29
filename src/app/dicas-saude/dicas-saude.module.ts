import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DicasSaudePageRoutingModule } from './dicas-saude-routing.module';

import { DicasSaudePage } from './dicas-saude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DicasSaudePageRoutingModule
  ],
  declarations: [DicasSaudePage]
})
export class DicasSaudePageModule {}
