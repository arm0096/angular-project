import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";

const routes: Routes = [
  {
    path:"",
    component:AdminComponent,
    children:[
      {
        path:"allpost",
        loadChildren: ()=>import('./allpost/allpost.module').then((m) =>m.AllpostModule),
      },
      {
        path: "autorslist",
        loadChildren:() =>import('./autorslist/autorslist.module').then((m)=>m.AutorslistModule),
      },
      {
        path: "cat",
        loadChildren:()=>import('./cat/cat.module').then((m)=>m.CatModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
