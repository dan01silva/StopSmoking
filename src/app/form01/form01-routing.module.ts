import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form01Page } from './form01.page';

const routes: Routes = [
  {
    path: '',
    component: Form01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Form01PageRoutingModule {}
