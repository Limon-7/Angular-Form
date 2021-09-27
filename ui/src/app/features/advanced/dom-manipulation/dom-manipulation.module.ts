import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomManipulationRoutingModule } from './dom-manipulation-routing.module';
import { DomRenderComponent } from './dom-render/dom-render.component';
import { DomLayoutComponent } from './dom-layout/dom-layout.component';


@NgModule({
  declarations: [
    DomRenderComponent,
    DomLayoutComponent
  ],
  imports: [
    CommonModule,
    DomManipulationRoutingModule
  ]
})
export class DomManipulationModule { }
