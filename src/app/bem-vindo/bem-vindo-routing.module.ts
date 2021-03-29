import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BemVindoPage } from './bem-vindo.page';

const routes: Routes = [
  {
    path: '',
    component: BemVindoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BemVindoPageRoutingModule {}
