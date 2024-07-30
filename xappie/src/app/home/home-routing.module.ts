import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageModule } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePageModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
