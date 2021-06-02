import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationRoutingModule } from './animation-routing.module';
import { OpenCloseComponent } from './open-close/open-close.component';


@NgModule({
  declarations: [
    OpenCloseComponent
  ],
  imports: [
    CommonModule,
    AnimationRoutingModule
  ]
})
export class AnimationModule { }
