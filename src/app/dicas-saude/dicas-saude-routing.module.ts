import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DicasSaudePage } from './dicas-saude.page';

const routes: Routes = [
  {
    path: '',
    component: DicasSaudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DicasSaudePageRoutingModule {}
