import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AutorslistComponent} from "./autorslist.component";

const routes: Routes = [
  {
    path:"",
    component:AutorslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorslistRoutingModule { }
