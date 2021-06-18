import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonusPage } from './bonus.page';

const routes: Routes = [
  {
    path: '',
    component: BonusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonusPageRoutingModule {}
