import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationRoutingModule } from './animation-routing.module';
import { OpenCloseComponent } from './open-close/open-close.component';
import { TodosComponent } from './todos/todos.component';
import { ZippyComponent } from './zippy/zippy.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OpenCloseComponent,
    TodosComponent,
    ZippyComponent
  ],
  imports: [
    CommonModule,
    AnimationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AnimationModule { }
