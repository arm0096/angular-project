import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import {SharedModule} from "../../components/shared/shared/shared.module";
import {PolicyComponent} from "./policy.component";


@NgModule({
  declarations: [PolicyComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    SharedModule
  ]
})
export class PolicyModule { }
