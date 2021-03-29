import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepoimentosPage } from './depoimentos.page';

const routes: Routes = [
  {
    path: '',
    component: DepoimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepoimentosPageRoutingModule {}
