import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form02Page } from './form02.page';

const routes: Routes = [
  {
    path: '',
    component: Form02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Form02PageRoutingModule {}
