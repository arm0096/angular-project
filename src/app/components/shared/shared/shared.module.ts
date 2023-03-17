import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../header/header.component";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "../../footer/footer.component";
import {ChooseComponent} from "../../choose/choose.component";
import {ListComponent} from "../../list/list.component";
import {AllComponent} from "../../all/all/all.component";
import {PostsComponent} from "../../posts/posts.component";
import {NextComponent} from "../../next/next.component";


@NgModule({
  declarations: [HeaderComponent, FooterComponent,ChooseComponent,ListComponent,AllComponent,PostsComponent,NextComponent],
  exports:[HeaderComponent, FooterComponent,ChooseComponent,ListComponent,AllComponent,PostsComponent,NextComponent,],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
