import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePerfilPageRoutingModule } from './home-perfil-routing.module';

import { HomePerfilPage } from './home-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePerfilPageRoutingModule
  ],
  declarations: [HomePerfilPage]
})
export class HomePerfilPageModule {}
